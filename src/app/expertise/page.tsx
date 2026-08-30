import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { MediaBand, MediaFrame } from "@/components/Media";
import { PageHero } from "@/components/PageHero";
import { domains } from "@/data/domains";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Expertise et domaines",
  description: `Domaines d’expertise et projets réalisés — ${site.slogan}`,
};

const domainImages: Record<string, string> = {
  "btp-genie-civil": "/images/hero-btp.jpg",
  environnement: "/images/environnement.jpg",
  energies: "/images/energie.jpg",
  assainissement: "/images/environnement.jpg",
  "sig-cartographie": "/images/projets.jpg",
  "hse-qhse": "/images/entreprise.jpg",
  "conseil-etudes": "/images/entreprise.jpg",
};

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

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Expertise et domaines"
        description="Une lecture claire de nos expertises, de nos prestations et des typologies de projets réalisés."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertise et domaines" },
        ]}
      />

      <MediaBand
        src="/images/projets.jpg"
        alt="Expertise ingénierie et projets"
        className="h-40 sm:h-52 lg:h-60"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
          Nos domaines
        </p>
        <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
          Une offre structurée par métier
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
          Chaque domaine regroupe des prestations ciblées, de la présentation
          jusqu’à l’équipe mobilisée, pour répondre aux enjeux techniques,
          environnementaux et énergétiques de vos projets.
        </p>

        <div className="mt-14 space-y-16">
          {domains.map((domain, index) => (
            <article
              key={domain.slug}
              id={domain.slug}
              className="scroll-mt-28 border-t border-[var(--line)] pt-10"
            >
              <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
                <MediaFrame
                  src={domainImages[domain.slug] ?? "/images/entreprise.jpg"}
                  alt={domain.shortTitle}
                  className={`aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                />
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                    {domain.eyebrow}
                  </p>
                  <h3 className="banner-title font-display mt-2 text-2xl font-bold text-ink sm:text-3xl">
                    {domain.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-stone">{domain.summary}</p>
                  <Link
                    href={`/domaines/${domain.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-navy hover:text-navy-mid"
                  >
                    Voir le domaine →
                  </Link>

                  {domain.services.length > 0 ? (
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      <li>
                        <Link
                          href={`/domaines/${domain.slug}`}
                          className="block border border-[var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-ink transition hover:border-navy/30 hover:bg-white"
                        >
                          Présentation
                        </Link>
                      </li>
                      {domain.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/domaines/${domain.slug}/${service.slug}`}
                            className="block border border-[var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-ink transition hover:border-navy/30 hover:bg-white"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {domain.highlights.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-crimson bg-white/60 px-4 py-3 text-sm text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Réalisations
          </p>
          <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Projets réalisés
          </h2>
          <p className="mt-4 max-w-3xl text-ink/80">
            Une sélection de typologies d’interventions menées par Ingenio
            Consulting.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-[var(--line)] bg-white/70"
              >
                <MediaFrame
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10]"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                    {project.domain}
                  </p>
                  <h3 className="banner-title font-display mt-2 text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
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
