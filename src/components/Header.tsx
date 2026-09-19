"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { headerNav } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(56);
  const menuId = useId();
  const pathname = usePathname();
  const scrollYRef = useRef(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const update = () => {
      setBarHeight(Math.ceil(el.getBoundingClientRect().height));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;

    if (mobileOpen) {
      scrollYRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
      return;
    }

    const y = scrollYRef.current;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    documentElement.style.overflow = "";
    if (y) window.scrollTo(0, y);
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      const { body, documentElement } = document;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header className="site-header">
        <div
          ref={barRef}
          className="site-header__bar mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8"
        >
          <div className="min-w-0 shrink">
            <BrandLogo priority size="header" />
          </div>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Navigation principale"
          >
            {headerNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm px-2.5 py-2 text-[0.78rem] font-semibold tracking-wide transition-colors ${
                    active ? "bg-white/15" : "hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/contact/devis"
              className="header-cta hidden rounded-sm px-3 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] md:inline-flex"
            >
              <span className="lg:hidden">Devis</span>
              <span className="hidden lg:inline">Demander un devis</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/40 bg-white/10 transition-colors hover:bg-white/15 sm:h-11 sm:w-11 xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span
                aria-hidden
                className={`mobile-nav-icon ${mobileOpen ? "is-open" : ""}`}
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`mobile-nav-backdrop xl:hidden ${mobileOpen ? "is-open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            tabIndex={mobileOpen ? 0 : -1}
            aria-label="Fermer le menu"
            className="absolute inset-0 border-0 bg-transparent"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        <div
          id={menuId}
          className={`mobile-nav-drawer xl:hidden ${mobileOpen ? "is-open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="mobile-nav-drawer__clip">
            <nav
              className="mobile-nav-drawer__content mx-auto max-w-7xl overflow-y-auto overscroll-contain px-4 py-2 sm:px-6"
              aria-label="Navigation mobile"
            >
              {headerNav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={mobileOpen ? 0 : -1}
                  onClick={() => setMobileOpen(false)}
                  style={
                    {
                      "--nav-i": index,
                    } as CSSProperties
                  }
                  className={`mobile-nav-link block border-b border-white/15 px-1 py-3.5 text-[0.95rem] font-semibold ${
                    isActive(pathname, item.href) ? "bg-white/10" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/devis"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileOpen(false)}
                style={
                  {
                    "--nav-i": headerNav.length,
                  } as CSSProperties
                }
                className="header-cta mobile-nav-link my-4 inline-flex w-full items-center justify-center rounded-sm px-4 py-3.5 text-sm font-bold uppercase tracking-[0.08em]"
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div
        className="site-header-spacer"
        style={{ height: barHeight }}
        aria-hidden
      />
    </>
  );
}
