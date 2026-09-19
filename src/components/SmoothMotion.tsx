"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function bindSectionReveals() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main > section"),
  );

  // Première section toujours visible (hero)
  sections.forEach((node, index) => {
    if (index === 0) {
      node.classList.add("is-inview");
      node.classList.remove("reveal-pending");
    }
  });

  const targets = sections.filter((_, index) => index > 0);

  if (reduce) {
    targets.forEach((node) => {
      node.classList.remove("reveal-pending");
      node.classList.add("is-inview");
    });
    return () => {};
  }

  targets.forEach((node) => {
    if (!node.classList.contains("is-inview")) {
      node.classList.add("reveal-pending");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-inview");
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
  );

  targets.forEach((node) => {
    if (!node.classList.contains("is-inview")) observer.observe(node);
  });

  // Filet de sécurité : rien ne reste invisible
  const failSafe = window.setTimeout(() => {
    targets.forEach((node) => {
      node.classList.add("is-inview");
      node.classList.remove("reveal-pending");
    });
  }, 1800);

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

  useEffect(() => {
    if (!ready) return;

    let cleanup: () => void = () => {};
    const id = window.requestAnimationFrame(() => {
      cleanup = bindSectionReveals();
    });

    return () => {
      window.cancelAnimationFrame(id);
      cleanup();
    };
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
      <div className={`site-frame w-full max-w-full overflow-x-clip ${ready ? "is-ready" : "is-pending"}`}>
        {children}
      </div>
    </>
  );
}
