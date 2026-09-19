"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const REVEAL_SELECTOR = "main > section, main > article";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function bindSectionReveals() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
  );

  nodes.forEach((node, index) => {
    node.classList.remove("is-inview", "reveal-pending");
    node.style.removeProperty("transition-delay");

    if (index === 0) {
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

  let batch = 0;
  let batchTimer: ReturnType<typeof setTimeout> | null = null;

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

        const delay = Math.min(batch, 4) * 160;
        el.style.transitionDelay = `${delay}ms`;
        batch += 1;

        if (batchTimer) clearTimeout(batchTimer);
        batchTimer = setTimeout(() => {
          batch = 0;
        }, 500);

        requestAnimationFrame(() => {
          el.classList.add("is-inview");
        });
        observer.unobserve(el);

        const clearDelay = (event: TransitionEvent) => {
          if (event.propertyName !== "opacity") return;
          el.style.removeProperty("transition-delay");
          el.removeEventListener("transitionend", clearDelay);
        };
        el.addEventListener("transitionend", clearDelay);
      }
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  targets.forEach((node) => observer.observe(node));

  const failSafe = window.setTimeout(() => {
    targets.forEach((node) => {
      if (!node.classList.contains("is-inview")) {
        node.style.removeProperty("transition-delay");
        node.classList.add("is-inview");
      }
    });
  }, 30000);

  return () => {
    window.clearTimeout(failSafe);
    if (batchTimer) clearTimeout(batchTimer);
    observer.disconnect();
  };
}

export function SmoothMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Chaque changement d’onglet / route → haut de page
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

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

  useLayoutEffect(() => {
    if (!ready) return;

    const cleanup = bindSectionReveals();
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
