import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Entrons en contact"
        description="Une question, un projet ou un besoin d’accompagnement ? Notre équipe vous répond."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="section-pad section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <div className="min-w-0 lg:col-start-2 lg:row-start-1">
            <ContactForm intent="contact" />
          </div>
          <aside className="min-w-0 space-y-6 lg:col-start-1 lg:row-start-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                Coordonnées
              </p>
              <ul className="mt-4 space-y-3 text-ink/85">
                <li className="leading-relaxed">{site.address}</li>
                <li>
                  <a
                    className="break-all font-medium text-navy hover:text-navy-mid sm:break-normal"
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
              </ul>
            </div>
            <div className="space-y-2 border-t border-[var(--line)] pt-6 text-sm">
              <Link
                href="/contact/devis"
                className="block font-semibold text-navy hover:text-navy-mid"
              >
                Demander un devis →
              </Link>
              <Link
                href="/contact/candidature"
                className="block font-semibold text-navy hover:text-navy-mid"
              >
                Candidature →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
