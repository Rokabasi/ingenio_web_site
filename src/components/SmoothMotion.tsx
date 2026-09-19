"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const REVEAL_SELECTOR = "main > section, main > article";

function bindSectionReveals() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
  );

  nodes.forEach((node, index) => {
    node.classList.remove("is-inview", "reveal-pending");
    node.style.removeProperty("transition-delay");

    if (index === 0) {
      // Hero / première section : visible immédiatement
      node.classList.add("is-inview");
      return;
    }

    node.classList.add("reveal-pending");
  });

  const targets = nodes.filter((_, index) => index > 0);

  if (reduce) {
    targets.forEach((node) => {
      node.classList.remove("reveal-pending");
      node.classList.add("is-inview");
    });
    return () => {};
  }

  let staggerIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );

      for (const entry of visible) {
        const el = entry.target as HTMLElement;
        if (el.classList.contains("is-inview")) {
          observer.unobserve(el);
          continue;
        }

        // Décalage léger si plusieurs blocs entrent ensemble (premier écran)
        el.style.transitionDelay = `${staggerIndex * 110}ms`;
        staggerIndex += 1;

        // Force reflow puis apparition (transition CSS lente)
        void el.offsetWidth;
        el.classList.add("is-inview");
        observer.unobserve(el);

        const clearDelay = () => {
          el.style.removeProperty("transition-delay");
          el.removeEventListener("transitionend", clearDelay);
        };
        el.addEventListener("transitionend", clearDelay);
      }
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  targets.forEach((node) => observer.observe(node));

  // Filet a11y uniquement (ne coupe plus l’effet au scroll)
  const failSafe = window.setTimeout(() => {
    targets.forEach((node) => {
      if (!node.classList.contains("is-inview")) {
        node.style.removeProperty("transition-delay");
        node.classList.add("is-inview");
      }
    });
  }, 25000);

  return () => {
    window.clearTimeout(failSafe);
    observer.disconnect();
  };
}

export function SmoothMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReady(true);
      setExit(true);
      return;
    }

    const start = performance.now();
    const minMs = 550;

    const finish = () => {
      const wait = Math.max(0, minMs - (performance.now() - start));
      window.setTimeout(() => {
        setExit(true);
        window.setTimeout(() => setReady(true), 420);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => window.removeEventListener("load", finish);
  }, []);

  // Appliquer reveal-pending avant paint pour éviter le flash
  useLayoutEffect(() => {
    if (!ready) return;

    let cleanup: () => void = () => {};
    cleanup = bindSectionReveals();

    return () => cleanup();
  }, [ready, pathname]);

  return (
    <>
      {!ready ? (
        <div
          className={`site-loader ${exit ? "is-leaving" : ""}`}
          aria-hidden={exit}
          aria-label="Chargement"
        >
          <div className="site-loader__inner">
            <Image
              src="/logo.png"
              alt=""
              width={200}
              height={64}
              priority
              className="site-loader__logo"
            />
            <div className="site-loader__bar" />
          </div>
        </div>
      ) : null}
      <div
        className={`site-frame w-full max-w-full overflow-x-clip ${ready ? "is-ready" : "is-pending"}`}
      >
        {children}
      </div>
    </>
  );
}
