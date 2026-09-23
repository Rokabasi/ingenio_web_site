import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { MediaFrame } from "@/components/Media";
import { PageHero } from "@/components/PageHero";
import { domains } from "@/data/domains";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Expertise et domaines",
  description: `Domaines d’expertise et projets réalisés — ${site.slogan}`,
};

const domainImages: Record<
  string,
  { src: string; imageClassName?: string }
> = {
  "btp-genie-civil": {
    src: "/images/hero-btp.jpg",
    imageClassName: "object-[center_40%]",
  },
  environnement: {
    src: "/images/env.jpeg",
    imageClassName: "object-[center_45%]",
  },
  assainissement: {
    src: "/images/ass.jpeg",
    imageClassName: "object-[center_50%]",
  },
  "sig-cartographie": {
    src: "/images/sig.jpeg",
    imageClassName: "object-[center_40%]",
  },
  "hse-qhse": {
    src: "/images/qhse.jpeg",
    imageClassName: "object-[center_35%]",
  },
};

const HIDDEN_DOMAIN_SLUGS = new Set(["conseil-etudes", "energies"]);

const visibleDomains = domains.filter(
  (domain) => !HIDDEN_DOMAIN_SLUGS.has(domain.slug),
);

function getDomainPreview(domain: (typeof domains)[number]) {
  const intro = domain.description[0] ?? domain.summary;
  const shortIntro =
    intro.length > 180 ? `${intro.slice(0, 177).trimEnd()}…` : intro;

  const items =
    domain.services.length > 0
      ? domain.services.map((s) => s.title)
      : domain.highlights;

  return {
    intro: shortIntro,
    items: items.slice(0, 6),
    moreCount: Math.max(0, items.length - 6),
  };
}

const projects = [
  {
    title: "Études d’infrastructures et suivi de travaux",
    domain: "BTP & Génie civil",
    text: "Accompagnement technique de projets d’ouvrages, de bâtiments et d’aménagements.",
    image: "/images/hero-btp.jpg",
  },
  {
    title: "Évaluations environnementales et sociales",
    domain: "Cabinet environnemental",
    text: "Réalisation d’EIES, EES, NIE et élaboration de PGES pour sécuriser les projets.",
    image: "/images/env.jpeg",
  },
  {
    title: "Assainissement et solutions sanitaires",
    domain: "Assainissement",
    text: "Conception d’ouvrages, fosses biofiltres et gestion des boues de vidange.",
    image: "/images/ass.jpeg",
  },
  {
    title: "Cartographie et analyse territoriale",
    domain: "SIG & Cartographie",
    text: "Production de données géospatiales au service de la planification et du suivi.",
    image: "/images/sig.jpeg",
  },
];

function DomainMedia({
  src,
  alt,
  imageClassName = "",
}: {
  src: string;
  alt: string;
  imageClassName?: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="bg-white p-2 shadow-[0_18px_44px_rgba(21,36,71,0.12)] ring-1 ring-navy/12 sm:p-2.5">
        <div className="relative overflow-hidden bg-navy ring-1 ring-navy/20">
          <MediaFrame
            src={src}
            alt={alt}
            imageClassName={imageClassName}
            className="aspect-[4/3] w-full"
          />
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[3px] bg-gradient-to-r from-crimson via-crimson/80 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </figure>
  );
}

function DomainContent({
  domain,
  index,
}: {
  domain: (typeof domains)[number];
  index: number;
}) {
  const preview = getDomainPreview(domain);
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="relative flex min-h-full min-w-0 flex-col justify-center pl-0 sm:pl-1">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold tabular-nums text-navy/15 sm:text-4xl">
          {number}
        </span>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-green sm:text-xs">
          {domain.eyebrow}
        </p>
      </div>

      <h3 className="banner-title font-display mt-2 text-[1.45rem] font-bold text-ink sm:mt-3 sm:text-[2rem] sm:leading-tight">
        {domain.shortTitle}
      </h3>

      <div
        className="mt-4 h-0.5 w-14 origin-left bg-crimson sm:mt-5 sm:w-16"
        aria-hidden
      />

      <p className="mt-4 max-w-xl text-[0.95rem] font-medium leading-relaxed text-ink/90 sm:mt-5 sm:text-lg">
        {domain.summary}
      </p>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone sm:text-[0.95rem]">
        {preview.intro}
      </p>

      <div className="mt-7 sm:mt-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-crimson sm:text-xs">
          Prestations clés
        </p>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
          {preview.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm leading-snug text-ink"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-green"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {preview.moreCount > 0 ? (
          <p className="mt-3 text-xs font-medium text-stone sm:text-sm">
            +{preview.moreCount} autres prestations sur demande
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Expertise et domaines"
        description="Une vue d’ensemble claire de nos métiers, prestations et typologies de projets."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertise et domaines" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-[var(--line)] bg-gradient-to-b from-white/80 to-mist">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-navy/[0.04] blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Nos domaines
          </p>
          <h2 className="banner-title font-display mt-3 max-w-2xl text-[1.4rem] font-bold text-ink sm:text-4xl">
            Une offre structurée par métier
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80 sm:mt-4 sm:text-lg">
            Cinq domaines complémentaires pour identifier rapidement l’expertise
            adaptée à votre projet.
          </p>

          <nav
            aria-label="Aller à un domaine"
            className="mt-8 flex flex-wrap gap-x-1 gap-y-2 border-t border-[var(--line)] pt-6 sm:mt-10"
          >
            {visibleDomains.map((domain, index) => (
              <a
                key={domain.slug}
                href={`#${domain.slug}`}
                className="group inline-flex items-center gap-2 px-2.5 py-1.5 text-sm text-stone transition hover:text-navy"
              >
                <span className="font-display text-xs font-bold tabular-nums text-navy/30 group-hover:text-crimson">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{domain.shortTitle}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {visibleDomains.map((domain, index) => {
        const imageLeft = index % 2 === 0;
        const image = domainImages[domain.slug] ?? {
          src: "/images/entreprise.jpg",
        };
        const isLast = index === visibleDomains.length - 1;

        return (
          <article
            key={domain.slug}
            id={domain.slug}
            className={`scroll-mt-28 ${
              imageLeft
                ? "bg-white/70"
                : "bg-gradient-to-br from-sand/70 via-mist to-sand/40"
            } ${isLast ? "" : "border-b border-[var(--line)]"}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                <div
                  className={`min-w-0 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <DomainMedia
                    src={image.src}
                    alt={domain.shortTitle}
                    imageClassName={image.imageClassName}
                  />
                </div>
                <div
                  className={`min-w-0 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <DomainContent domain={domain} index={index} />
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <section className="border-y border-[var(--line)] bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-soft">
                Réalisations
              </p>
              <h2 className="banner-title font-display mt-3 text-[1.4rem] font-bold text-white sm:text-4xl">
                Projets réalisés
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Une sélection de typologies d’interventions menées par Ingenio
                Consulting.
              </p>
            </div>
            <div
              className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent sm:mx-10 sm:mb-3 sm:block"
              aria-hidden
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {projects.map((project, index) => (
              <article key={project.title} className="group flex flex-col">
                <div className="relative overflow-hidden ring-1 ring-white/10">
                  <MediaFrame
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 z-[1] h-0.5 w-12 bg-crimson"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col pt-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-crimson-soft">
                    {String(index + 1).padStart(2, "0")} · {project.domain}
                  </p>
                  <h3 className="banner-title font-display mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 border-t border-white/10 pt-6 text-sm text-white/65">
            Pour une référence proche de votre besoin,{" "}
            <Link
              href="/contact"
              className="font-semibold text-white underline decoration-crimson underline-offset-4 transition hover:text-crimson-soft"
            >
              contactez-nous
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
