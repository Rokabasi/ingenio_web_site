import Link from "next/link";

export function ContentProse({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-4 text-base leading-relaxed text-ink/85 sm:space-y-5 sm:text-[1.05rem] ${className}`}
    >
      {children}
    </div>
  );
}

export function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink/85">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DomainCard({
  href,
  eyebrow,
  title,
  summary,
}: {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block border-b border-[var(--line)] py-6 transition hover:bg-white/40 sm:py-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
            {eyebrow}
          </p>
          <h3 className="banner-title font-display mt-2 text-lg font-semibold text-ink transition group-hover:text-navy-mid sm:text-2xl lg:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-stone sm:mt-3 sm:max-w-2xl sm:text-base">
            {summary}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy">
          Découvrir
          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
