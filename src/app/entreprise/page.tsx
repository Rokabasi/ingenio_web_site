import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ContentProse, DomainCard } from "@/components/Content";
import { MediaBand, MediaFrame } from "@/components/Media";
import { PageHero } from "@/components/PageHero";
import { domains } from "@/data/domains";
import {
  aboutApproach,
  aboutIntro,
  aboutObjective,
  ambition,
  mission,
  site,
  values,
  vision,
} from "@/data/site";

export const metadata: Metadata = {
  title: "L'entreprise",
  description: site.slogan,
};

const profiles = [
  "Ingénieurs en génie civil et BTP",
  "Environnementalistes",
  "Spécialistes HSE / QHSE",
  "Experts en géomatique et cartographie",
  "Spécialistes des énergies renouvelables",
  "Techniciens et chefs de projet",
  "Formateurs et consultants",
];

const partnerTypes = [
  {
    title: "Institutions & bailleurs",
    text: "Accompagnement de projets publics et de programmes de développement nécessitant rigueur technique et conformité.",
  },
  {
    title: "Entreprises & promoteurs",
    text: "Appui aux maîtres d’ouvrage et opérateurs privés sur les études, le suivi et l’intégration environnementale.",
  },
  {
    title: "Organisations & ONG",
    text: "Collaboration sur des missions territoriales, sanitaires, énergétiques ou de renforcement des capacités.",
  },
  {
    title: "Experts & partenaires techniques",
    text: "Mobilisation de compétences complémentaires pour constituer des équipes adaptées à chaque projet.",
  },
];

const imageShell =
  "overflow-hidden bg-navy ring-1 ring-navy/20 shadow-[0_20px_48px_rgba(21,36,71,0.14)]";

function FramedMedia({
  src,
  alt,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="bg-white p-2 shadow-[0_16px_40px_rgba(21,36,71,0.1)] ring-1 ring-navy/12 sm:p-2.5">
        <div className={`relative ${imageShell}`}>
          <MediaFrame
            src={src}
            alt={alt}
            imageClassName={imageClassName}
            className={className}
          />
          <span
            className="pointer-events-none absolute bottom-0 left-0 z-[1] h-1 w-16 bg-crimson sm:w-20"
            aria-hidden
          />
        </div>
      </div>
    </figure>
  );
}

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        eyebrow="L’entreprise"
        title="Ingenio Consulting SARL"
        description={site.slogan}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "L’entreprise" },
        ]}
      />

      <section id="a-propos" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              À propos
            </p>
            <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
              Une société congolaise d’ingénierie et de conseil
            </h2>
            <ContentProse className="mt-6">
              <p>{aboutIntro}</p>
              <p>{aboutApproach}</p>
              <p>{aboutObjective}</p>
            </ContentProse>
          </div>
          <FramedMedia
            src="/images/entreprisesss.jpeg"
            alt="Ingenio Consulting — équipe et conseil"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="bg-white p-2 shadow-[0_16px_40px_rgba(21,36,71,0.1)] ring-1 ring-navy/12 sm:p-2.5">
          <div className={`relative ${imageShell}`}>
            <MediaBand
              src="/images/environnement.jpg"
              alt="Environnement et développement durable"
              className="h-48 sm:h-60 lg:h-72"
            />
            <span
              className="pointer-events-none absolute bottom-0 left-0 z-[1] h-1 w-20 bg-crimson"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <section id="vision-mission" className="border-y border-[var(--line)] bg-white/40">
        <div className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Vision & Mission
          </p>
          <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
            Ce qui guide nos interventions
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="bg-navy p-8 text-sand sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white">
                Notre vision
              </h3>
              <p className="mt-5 leading-relaxed text-white/85">{vision}</p>
            </article>
            <article className="border border-[var(--line)] bg-white/70 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-ink">
                Notre mission
              </h3>
              <p className="mt-5 leading-relaxed text-ink/85">{mission}</p>
            </article>
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-ink">
              Notre ambition
            </h3>
            <ContentProse className="mt-4">
              <p>{ambition}</p>
            </ContentProse>
          </div>
          <div className="mt-14">
            <h3 className="font-display text-2xl font-bold text-ink">
              Nos valeurs
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="border-t border-navy/20 pt-5">
                  <h4 className="font-display text-xl font-semibold text-ink">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="domaines" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Domaines d’intervention
            </p>
            <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
              Une offre intégrée
            </h2>
            <p className="mt-4 max-w-2xl text-ink/80">
              Nos expertises couvrent le BTP, l’environnement, l’énergie,
              l’assainissement, la géomatique, le HSE et le conseil.
            </p>
            <Link
              href="/expertise"
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-navy"
            >
              Détail de l’expertise →
            </Link>
          </div>
          <FramedMedia
            src="/images/ingenio.jpeg"
            alt="Énergies renouvelables et ingénierie"
            className="aspect-[16/11]"
          />
        </div>
        <div className="mt-10">
          {domains.map((domain) => (
            <DomainCard
              key={domain.slug}
              href={`/domaines/${domain.slug}`}
              eyebrow={domain.eyebrow}
              title={domain.shortTitle}
              summary={domain.summary}
            />
          ))}
        </div>
      </section>

      <section id="organisation" className="border-y border-[var(--line)] bg-sand/50">
        <div className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FramedMedia
                src="/images/hero-btp.jpg"
                alt="Organisation projets et chantiers"
                className="mb-8 aspect-[16/10]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Organisation
              </p>
              <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
                Une équipe structurée autour des projets
              </h2>
              <ContentProse className="mt-6">
                <p>
                  Notre organisation repose sur la pluridisciplinarité et le
                  travail collaboratif. Selon la nature et la complexité de
                  chaque projet, nous constituons des équipes adaptées.
                </p>
              </ContentProse>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                Nos experts
              </p>
              <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
                Une équipe pluridisciplinaire
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {profiles.map((profile) => (
                  <li
                    key={profile}
                    className="border-l-2 border-crimson bg-white/70 px-4 py-3 text-sm text-ink"
                  >
                    {profile}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="partenaires" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <FramedMedia
              src="/images/projets.jpg"
              alt="Partenariats et projets collaboratifs"
              className="mb-8 aspect-[16/10]"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Nos partenaires
            </p>
            <h2 className="banner-title font-display mt-3 text-[1.35rem] font-bold text-ink sm:text-3xl">
              Des alliances au service de projets durables
            </h2>
            <ContentProse className="mt-6">
              <p>
                Ingenio Consulting construit des collaborations durables avec
                des acteurs publics, privés et techniques pour livrer des
                solutions fiables et adaptées aux réalités locales.
              </p>
            </ContentProse>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto"
            >
              Devenir partenaire
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partnerTypes.map((partner, index) => (
              <article
                key={partner.title}
                className="border border-[var(--line)] bg-white/70 p-5 sm:p-6"
              >
                <p className="text-xs font-semibold text-crimson">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">
                  {partner.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {partner.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
