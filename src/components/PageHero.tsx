import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden hero-mesh text-sand">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {crumbs?.length ? (
          <nav
            aria-label="Fil d’Ariane"
            className="mb-3 text-[0.65rem] text-white/60 sm:mb-5 sm:text-xs"
          >
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 sm:gap-x-2">
              {crumbs.map((crumb, i) => (
                <li
                  key={`${crumb.label}-${i}`}
                  className="flex min-w-0 items-center gap-1.5 sm:gap-2"
                >
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="truncate text-white/85">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-crimson-soft sm:text-xs sm:tracking-[0.2em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="banner-title font-display mt-2.5 max-w-4xl text-[1.45rem] font-bold text-white sm:mt-3 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-white/80 sm:mt-5 sm:text-base lg:text-lg">
            {description}
          </p>
        ) : null}
        <div className="draw-line mt-5 h-1 w-16 bg-crimson sm:mt-8 sm:w-24" />
      </div>
    </section>
  );
}
