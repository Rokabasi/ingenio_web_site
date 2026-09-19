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
    imageClassName: "object-[center_42%]",
  },
  environnement: { src: "/images/environnement.jpg" },
  energies: { src: "/images/energie.jpg" },
  assainissement: {
    src: "/images/environnement.jpg",
    imageClassName: "object-[center_65%]",
  },
  "sig-cartographie": {
    src: "/images/projets.jpg",
    imageClassName: "object-[center_38%]",
  },
  "hse-qhse": { src: "/images/formations.jpg" },
  "conseil-etudes": { src: "/images/entreprise.jpg" },
};

const domainImageFrame =
  "aspect-[3/2] w-full ring-1 ring-[var(--line)] shadow-[0_10px_32px_rgba(21,36,71,0.08)]";

/** Aperçu synthétique : 1 phrase d’intro + prestations clés (titres seuls) */
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
    image: "/images/environnement.jpg",
  },
  {
    title: "Solutions solaires et électrification",
    domain: "Énergies & Électricité",
    text: "Dimensionnement, installation et maintenance de solutions énergétiques adaptées.",
    image: "/images/energie.jpg",
  },
  {
    title: "Assainissement et solutions sanitaires",
    domain: "Assainissement",
    text: "Conception d’ouvrages, fosses biofiltres et gestion des boues de vidange.",
    image: "/images/environnement.jpg",
  },
  {
    title: "Cartographie et analyse territoriale",
    domain: "SIG & Cartographie",
    text: "Production de données géospatiales au service de la planification et du suivi.",
    image: "/images/projets.jpg",
  },
];

function DomainContent({
  domain,
  compact = false,
}: {
  domain: (typeof domains)[number];
  compact?: boolean;
}) {
  const preview = getDomainPreview(domain);

  return (
    <div className="min-w-0">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-green sm:text-xs">
        {domain.eyebrow}
      </p>
      <h3
        className={`banner-title font-display mt-2 font-bold text-ink ${
          compact
            ? "text-[1.2rem] sm:text-2xl"
            : "text-[1.35rem] sm:text-3xl lg:text-[2rem]"
        }`}
      >
        {domain.shortTitle}
      </h3>
      <p
        className={`mt-2.5 font-medium text-ink/85 sm:mt-3 ${
          compact ? "max-w-xl text-sm sm:text-base" : "max-w-xl text-[0.95rem] sm:text-base"
        }`}
      >
        {domain.summary}
      </p>
      <p
        className={`mt-3 leading-relaxed text-stone ${
          compact ? "max-w-xl text-sm" : "max-w-xl text-sm sm:text-[0.95rem]"
        }`}
      >
        {preview.intro}
      </p>

      <div className="mt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-crimson sm:text-xs">
          Prestations clés
        </p>
        <ul
          className={`mt-3 flex flex-wrap gap-2 ${compact ? "" : "sm:gap-2.5"}`}
        >
          {preview.items.map((item) => (
            <li
              key={item}
              className="border border-[var(--line)] bg-white/80 px-3 py-1.5 text-xs font-medium text-ink sm:text-sm"
            >
              {item}
            </li>
          ))}
          {preview.moreCount > 0 ? (
            <li className="px-2 py-1.5 text-xs font-medium text-stone sm:text-sm">
              +{preview.moreCount} autres
            </li>
          ) : null}
        </ul>
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
          Nos domaines
        </p>
        <h2 className="banner-title font-display mt-3 text-[1.4rem] font-bold text-ink sm:text-4xl">
          Une offre structurée par métier
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80 sm:mt-4 sm:text-lg">
          Sept domaines complémentaires, présentés de façon synthétique pour
          identifier rapidement l’expertise adaptée à votre projet.
        </p>
      </section>

      {domains.map((domain, index) => {
        const featured = index % 2 === 0;
        const image = domainImages[domain.slug] ?? {
          src: "/images/entreprise.jpg",
        };

        return (
          <article
            key={domain.slug}
            id={domain.slug}
            className={`scroll-mt-28 border-t border-[var(--line)] ${
              featured ? "bg-white/60" : "bg-sand/45"
            }`}
          >
            <div
              className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
                featured ? "py-12 sm:py-16 lg:py-16" : "py-10 sm:py-12 lg:py-14"
              }`}
            >
              {featured ? (
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <MediaFrame
                    src={image.src}
                    alt={domain.shortTitle}
                    imageClassName={image.imageClassName}
                    className={domainImageFrame}
                  />
                  <DomainContent domain={domain} />
                </div>
              ) : (
                <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,260px)] lg:gap-12">
                  <DomainContent domain={domain} compact />
                  <div className="mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-none">
                    <MediaFrame
                      src={image.src}
                      alt={domain.shortTitle}
                      imageClassName={image.imageClassName}
                      className={domainImageFrame}
                    />
                  </div>
                </div>
              )}
            </div>
          </article>
        );
      })}

      <section className="border-y border-[var(--line)] bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Réalisations
          </p>
          <h2 className="banner-title font-display mt-3 text-[1.4rem] font-bold text-ink sm:text-4xl">
            Projets réalisés
          </h2>
          <p className="mt-4 max-w-3xl text-ink/80">
            Une sélection de typologies d’interventions menées par Ingenio
            Consulting.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-[var(--line)] bg-white/70"
              >
                <MediaFrame
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                    {project.domain}
                  </p>
                  <h3 className="banner-title font-display mt-2 text-lg font-semibold text-ink sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone">
            Pour une référence proche de votre besoin,{" "}
            <Link href="/contact" className="font-semibold text-navy">
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
