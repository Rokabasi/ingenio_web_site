import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Ressources" };

const resources = [
  {
    title: "Nos domaines",
    href: "/domaines",
    text: "Explorer l’ensemble des expertises Ingenio.",
  },
  {
    title: "Ingenio Academia",
    href: "/academia",
    text: "Formations, stages et certification.",
  },
  {
    title: "Vérification de certificat",
    href: "/academia/verification",
    text: "Authentifier un document délivré par Academia.",
  },
  {
    title: "Demander un devis",
    href: "/contact/devis",
    text: "Lancer une demande d’accompagnement.",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Outils"
        title="Ressources"
        description="Accès rapides aux contenus utiles pour vos projets et formations."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ressources" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="border border-[var(--line)] bg-white/60 p-6 transition hover:border-moss/40 hover:bg-white"
            >
              <h2 className="font-display text-xl font-semibold text-ink">
                {resource.title}
              </h2>
              <p className="mt-2 text-sm text-stone">{resource.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
