"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { headerNav } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/40 bg-white/10 sm:h-11 sm:w-11 xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="text-lg leading-none">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`border-t border-white/20 bg-[#0d1730] xl:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-h-[calc(100dvh-4.5rem)] max-w-7xl overflow-y-auto overscroll-contain px-4 py-2 sm:px-6">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block border-b border-white/20 px-1 py-3.5 text-base font-semibold ${
                isActive(pathname, item.href) ? "bg-white/10" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/devis"
            onClick={() => setMobileOpen(false)}
            className="header-cta my-4 inline-flex w-full items-center justify-center rounded-sm px-4 py-3.5 text-sm font-bold uppercase tracking-[0.08em]"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}
