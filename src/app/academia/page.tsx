import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { MediaFrame } from "@/components/Media";
import { PageHero } from "@/components/PageHero";
import { VerificationForm } from "@/components/VerificationForm";

export const metadata: Metadata = {
  title: "Ingenio Academia",
};

const topics = [
  "Environnement",
  "HSE / QHSE",
  "SIG & cartographie",
  "BTP & génie civil",
  "Énergies renouvelables",
  "Assainissement & déchets",
  "Gestion de projets",
  "Développement durable",
  "Outils numériques",
  "Intelligence artificielle appliquée",
];

const sections = [
  {
    id: "formations",
    eyebrow: "Formations",
    title: "Des parcours professionnels concrets",
    text: "Formations professionnelles, ateliers pratiques, séminaires, conférences et webinaires pour renforcer les compétences techniques et managériales.",
    href: "/academia/formations",
    cta: "Voir les formations",
    image: "/images/formations.jpg",
    alt: "Formations Ingenio Academia",
  },
  {
    id: "stages",
    eyebrow: "Stages",
    title: "Apprendre au contact des projets",
    text: "Accueil et encadrement des stagiaires académiques et professionnels, avec une mise en pratique directement utile au monde du travail.",
    href: "/academia/stages",
    cta: "Découvrir les stages",
    image: "/images/stages.jpg",
    alt: "Stages Ingenio Academia",
  },
  {
    id: "formateurs",
    eyebrow: "Formateurs",
    title: "Une pédagogie portée par l’expertise",
    text: "Des formateurs issus de l’ingénierie, de l’environnement, du HSE, de la géomatique et de l’énergie, pour transmettre des compétences actionnables.",
    href: "/academia/formateurs",
    cta: "Rencontrer les formateurs",
    image: "/images/formateurs.jpg",
    alt: "Formateurs Ingenio Academia",
  },
  {
    id: "espace-apprenant",
    eyebrow: "Espace apprenant",
    title: "Suivre son parcours en ligne",
    text: "Un espace numérique dédié aux apprenants pour consulter le parcours de formation, les sessions suivies, les attestations et certificats.",
    href: "/academia/espace-apprenant",
    cta: "Accéder à l’espace",
    image: "/images/academia.jpg",
    alt: "Espace apprenant Academia",
  },
];

export default function AcademiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Formation"
        title="Ingenio Academia"
        description="Pôle de formation, de renforcement des capacités et de développement des compétences d’Ingenio Consulting."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ingenio Academia" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/85">
          Ingenio Academia propose des formations, stages et programmes de
          perfectionnement destinés aux étudiants, professionnels, entreprises
          et institutions — avec un portail apprenant et une vérification
          numérique des certificats.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <li
              key={topic}
              className="border-l-2 border-green bg-white/60 px-4 py-3 text-ink"
            >
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {sections.map((block, index) => (
        <section
          key={block.id}
          id={block.id}
          className={`scroll-mt-24 ${
            index % 2 === 0 ? "bg-white/50" : "bg-sand/40"
          }`}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                {block.eyebrow}
              </p>
              <h2 className="banner-title font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
                {block.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                {block.text}
              </p>
              <Link
                href={block.href}
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto"
              >
                {block.cta}
              </Link>
            </div>
            <MediaFrame
              src={block.image}
              alt={block.alt}
              className={index % 2 === 1 ? "lg:order-1" : undefined}
            />
          </div>
        </section>
      ))}

      <section id="certificats" className="scroll-mt-24 border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <MediaFrame
            src="/images/certificats.jpg"
            alt="Certificats Ingenio Academia"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Certificats
            </p>
            <h2 className="banner-title font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
              Attestations et certificats délivrés
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              À l’issue des formations et programmes validés, Ingenio Academia
              délivre des attestations et certificats authentifiables.
            </p>
            <Link
              href="/academia/certificats"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <section id="verification" className="scroll-mt-24 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Vérification QR
              </p>
              <h2 className="banner-title font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
                Authentifier un certificat
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                Vérifiez l’authenticité d’un certificat ou d’une attestation
                délivré(e) par Ingenio Academia via le code figurant sur le
                document.
              </p>
            </div>
            <VerificationForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Rejoindre une formation"
        primaryHref="/academia/inscription"
        primaryLabel="S’inscrire"
        secondaryHref="/academia/calendrier"
        secondaryLabel="Voir le calendrier"
      />
    </>
  );
}
