import Link from "next/link";
import type { Domain } from "@/data/domains";

export function DomainNav({
  domain,
  currentSlug,
}: {
  domain: Domain;
  currentSlug?: string;
}) {
  if (!domain.services.length) return null;

  return (
    <aside className="rounded-md border border-[var(--line)] bg-white/60 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
            Dans ce domaine
          </p>
          <ul className="mt-4 space-y-1">
            <li>
              <Link
                href={`/domaines/${domain.slug}`}
                className={`block rounded-sm px-2 py-2 text-sm transition ${
                  !currentSlug
                    ? "bg-navy text-white"
                    : "text-ink/80 hover:bg-sand"
                }`}
              >
                Présentation
              </Link>
            </li>
            {domain.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/domaines/${domain.slug}/${service.slug}`}
                  className={`block rounded-sm px-2 py-2 text-sm transition ${
                    currentSlug === service.slug
                      ? "bg-navy text-white"
                      : "text-ink/80 hover:bg-sand"
                  }`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
    </aside>
  );
}
