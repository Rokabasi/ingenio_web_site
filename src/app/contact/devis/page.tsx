import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis pour vos projets d’ingénierie, d’environnement, d’énergie ou de formation.",
};

const steps = [
  {
    title: "Décrivez votre besoin",
    text: "Domaine, localisation et objectifs du projet.",
  },
  {
    title: "Nous analysons",
    text: "Notre équipe étudie la faisabilité et le périmètre.",
  },
  {
    title: "Proposition claire",
    text: "Vous recevez une proposition technique et tarifaire.",
  },
];

const assurances = [
  { label: "Réponse rapide", detail: "Sous 48 h ouvrées" },
  { label: "Sans engagement", detail: "Analyse gratuite du besoin" },
  { label: "Confidentialité", detail: "Données protégées" },
];

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Devis"
        title="Demander un devis"
        description="Études, travaux, environnement, énergie, assainissement ou formation : décrivez votre projet, nous vous répondons rapidement."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Devis" },
        ]}
      />

      <section className="section-pad section-shell">
        <ul className="mb-8 grid gap-3 sm:mb-10 sm:grid-cols-3 sm:gap-4">
          {assurances.map((item) => (
            <li
              key={item.label}
              className="border border-[var(--line)] bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-ink/85">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div className="min-w-0 lg:col-start-2 lg:row-start-1">
            <ContactForm intent="devis" />
          </div>

          <aside className="min-w-0 space-y-8 lg:col-start-1 lg:row-start-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
                Comment ça marche
              </p>
              <h2 className="banner-title font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
                Un devis simple et professionnel
              </h2>
              <ol className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-3 sm:gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-stone">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-[var(--line)] bg-white/70 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                Autres contacts
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink/85">
                <li>
                  <a
                    className="font-medium break-all text-navy hover:text-navy-mid sm:break-normal"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-navy hover:text-navy-mid"
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="leading-relaxed text-stone">{site.address}</li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.1em] text-navy"
              >
                Page contact →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
