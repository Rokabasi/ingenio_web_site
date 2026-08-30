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
    <section className="relative bg-navy text-sand">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-crimson/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:gap-8 sm:px-6 sm:py-14 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="banner-title font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:mt-4 sm:text-base">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href={primaryHref}
            className="inline-flex w-full items-center justify-center rounded-sm bg-crimson px-5 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-crimson-soft sm:w-auto sm:py-3"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-sm border border-white/30 px-5 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:border-white/60 sm:w-auto sm:py-3"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
