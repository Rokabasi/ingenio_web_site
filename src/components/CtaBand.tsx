import Link from "next/link";

type CtaBandProps = {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title = "Parlons de votre projet",
  text = "Études, ingénierie, environnement, énergie ou formation : notre équipe vous accompagne avec une approche intégrée.",
  primaryHref = "/contact/devis",
  primaryLabel = "Demander un devis",
  secondaryHref = "/contact",
  secondaryLabel = "Nous contacter",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-sand">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green/25 blur-3xl sm:-right-16 sm:-top-16 sm:h-56 sm:w-56"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-4 h-36 w-36 rounded-full bg-crimson/20 blur-3xl sm:-bottom-20 sm:left-10 sm:h-48 sm:w-48"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:gap-8 sm:px-6 sm:py-14 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl min-w-0">
          <h2 className="banner-title font-display text-xl font-bold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">
            {text}
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
          <Link
            href={primaryHref}
            className="inline-flex w-full items-center justify-center rounded-sm bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-crimson-soft sm:w-auto sm:py-3 sm:text-sm sm:tracking-[0.1em]"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-sm border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-white/60 sm:w-auto sm:py-3 sm:text-sm sm:tracking-[0.1em]"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
