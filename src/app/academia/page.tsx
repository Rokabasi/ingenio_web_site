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
    image: "/images/formation.jpeg",
    alt: "Formations Ingenio Academia",
    imageClassName: "object-[center_72%]",
  },
  {
    id: "stages",
    eyebrow: "Stages",
    title: "Apprendre au contact des projets",
    text: "Accueil et encadrement des stagiaires académiques et professionnels, avec une mise en pratique directement utile au monde du travail.",
    href: "/academia/stages",
    cta: "Découvrir les stages",
    image: "/images/stage.jpeg",
    alt: "Stages Ingenio Academia",
    imageClassName: "object-[32%_58%]",
  },
  {
    id: "formateurs",
    eyebrow: "Formateurs",
    title: "Une pédagogie portée par l’expertise",
    text: "Des formateurs issus de l’ingénierie, de l’environnement, du HSE, de la géomatique et de l’énergie, pour transmettre des compétences actionnables.",
    href: "/academia/formateurs",
    cta: "Rencontrer les formateurs",
    image: "/images/formateur.jpeg",
    alt: "Formateurs Ingenio Academia",
    imageClassName: "object-[center_22%]",
    portrait: true,
  },
];

const frameBase =
  "w-full max-w-full min-w-0 ring-1 ring-[var(--line)] shadow-[0_10px_28px_rgba(21,36,71,0.08)]";

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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="max-w-3xl text-base leading-relaxed text-ink/85 sm:text-lg">
          Ingenio Academia propose des formations, stages et programmes de
          perfectionnement destinés aux étudiants, professionnels, entreprises
          et institutions — avec un portail apprenant et une vérification
          numérique des certificats.
        </p>
        <ul className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {topics.map((topic) => (
            <li
              key={topic}
              className="border-l-2 border-green bg-white/60 px-3.5 py-2.5 text-sm text-ink sm:px-4 sm:py-3 sm:text-base"
            >
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {sections.map((block, index) => {
        const imageLeft = index % 2 === 0;
        const aspect = block.portrait
          ? "aspect-[4/5] max-h-[420px] sm:max-h-none sm:aspect-[5/6] lg:aspect-[4/5]"
          : "aspect-[3/2]";

        return (
          <section
            key={block.id}
            id={block.id}
            className={`scroll-mt-24 border-t border-[var(--line)] ${
              imageLeft ? "bg-white/55" : "bg-sand/45"
            }`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
              <div
                className={`relative min-w-0 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
              >
                <MediaFrame
                  src={block.image}
                  alt={block.alt}
                  imageClassName={block.imageClassName}
                  className={`${frameBase} ${aspect}`}
                />
              </div>

              <div className={`min-w-0 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-green sm:text-xs sm:tracking-[0.2em]">
                  {block.eyebrow}
                </p>
                <h2 className="banner-title font-display mt-2.5 text-[1.35rem] font-bold text-ink sm:mt-3 sm:text-3xl">
                  {block.title}
                </h2>
                <p className="mt-3.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink/80 sm:mt-5 sm:text-lg">
                  {block.text}
                </p>
                <Link
                  href={block.href}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-navy-mid sm:mt-8 sm:w-auto sm:text-sm sm:tracking-[0.1em]"
                >
                  {block.cta}
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section
        id="certificats"
        className="scroll-mt-24 border-y border-[var(--line)] bg-white/55"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div className="relative min-w-0 lg:order-1">
            <MediaFrame
              src="/images/certificat.jpeg"
              alt="Certificats Ingenio Academia"
              imageClassName="object-[center_38%]"
              className={`${frameBase} aspect-[3/2]`}
            />
          </div>
          <div className="min-w-0 lg:order-2">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-green sm:text-xs sm:tracking-[0.2em]">
              Certificats
            </p>
            <h2 className="banner-title font-display mt-2.5 text-[1.35rem] font-bold text-ink sm:mt-3 sm:text-3xl">
              Attestations et certificats délivrés
            </h2>
            <p className="mt-3.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink/80 sm:mt-5 sm:text-lg">
              À l’issue des formations et programmes validés, Ingenio Academia
              délivre des attestations et certificats authentifiables.
            </p>
            <Link
              href="/academia"
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-navy-mid sm:mt-8 sm:w-auto sm:text-sm sm:tracking-[0.1em]"
            >
              En savoir plus
            </Link>
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
