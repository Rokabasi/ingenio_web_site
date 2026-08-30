import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { DomainCard } from "@/components/Content";
import { domains } from "@/data/domains";
import {
  aboutIntro,
  aboutObjective,
  mission,
  site,
  values,
  vision,
} from "@/data/site";

const stats = [
  { label: "Année de création", value: String(site.founded) },
  { label: "Domaines d’expertise", value: "7+" },
  { label: "Approche", value: "Intégrée" },
  { label: "Territoire", value: "RDC & Afrique" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92svh] hero-mesh text-sand sm:min-h-[100svh]">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-45" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[100svh] sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="reveal text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-crimson-soft sm:text-xs sm:tracking-[0.22em]">
              République Démocratique du Congo · Depuis {site.founded}
            </p>
            <h1 className="reveal reveal-delay-1 banner-title font-display mt-4 text-[2rem] font-extrabold text-white sm:mt-5 sm:text-5xl lg:text-6xl">
              INGENIO
              <span className="mt-2 block text-xl font-semibold uppercase tracking-[0.14em] text-white/85 sm:mt-3 sm:text-3xl sm:tracking-[0.18em] lg:text-4xl">
                Consulting SARL
              </span>
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-lg font-medium leading-relaxed text-white sm:mt-7 sm:text-xl lg:text-2xl">
              {site.slogan}
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href="#domaines"
                className="inline-flex w-full items-center justify-center rounded-sm bg-crimson px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-crimson-soft sm:w-auto"
              >
                Nos domaines
              </Link>
              <Link
                href="/contact/devis"
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/35 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/70 sm:w-auto"
              >
                Demander un devis
              </Link>
            </div>
          </div>
          <div className="draw-line mt-10 h-1 w-full max-w-md bg-gradient-to-r from-crimson via-green to-transparent sm:mt-12" />
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[var(--line)] sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-mist px-4 py-5 sm:px-7 sm:py-7">
              <p className="font-display text-xl font-bold text-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.12em] text-stone sm:mt-2 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
              Qui sommes-nous
            </p>
            <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Une ingénierie pluridisciplinaire au service des territoires
            </h2>
            <div className="mt-6 h-1 w-20 bg-crimson" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            <p>{aboutIntro}</p>
            <p>{aboutObjective}</p>
            <Link
              href="/entreprise"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy hover:text-navy-mid"
            >
              Découvrir l’entreprise <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="domaines"
        className="scroll-mt-24 border-y border-[var(--line)] bg-white/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
                Expertise
              </p>
              <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Nos domaines d’intervention
              </h2>
            </div>
            <Link
              href="/expertise"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-navy hover:text-navy-mid"
            >
              Voir l’expertise →
            </Link>
          </div>
          <div className="mt-6">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="bg-navy p-8 text-sand sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-soft">
              Vision
            </p>
            <p className="banner-title font-display mt-5 text-2xl font-semibold text-white">
              {vision}
            </p>
          </article>
          <article className="border border-[var(--line)] bg-white/70 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Mission
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">{mission}</p>
            <Link
              href="/entreprise#vision-mission"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-navy"
            >
              Vision, mission & valeurs →
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
            Culture d’entreprise
          </p>
          <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Nos valeurs
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="border-t border-navy/20 pt-5">
                <p className="text-xs text-stone">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">
              Ingenio Academia
            </p>
            <h2 className="banner-title font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Former pour renforcer les compétences
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">
              Formations professionnelles, stages, certification et vérification
              numérique des attestations : le pôle Academia développe les
              compétences techniques et professionnelles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/academia"
                className="inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto"
              >
                Découvrir Academia
              </Link>
              <Link
                href="/academia/verification"
                className="inline-flex w-full items-center justify-center rounded-sm border border-navy/25 px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-navy hover:border-navy/50 sm:w-auto"
              >
                Vérifier un certificat
              </Link>
            </div>
          </div>
          <div className="relative bg-navy-deep p-8 text-sand">
            <div className="absolute inset-0 opacity-40 hero-mesh" />
            <div className="relative">
              <p className="font-display text-4xl font-bold text-crimson-soft">
                QR
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Authentifiez les certificats et attestations délivrés par
                Ingenio Academia via un système de vérification numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
