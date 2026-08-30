import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Actualités" };

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Actualités"
        description="Vie de l’entreprise, missions, formations et publications à venir."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Actualités" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border border-dashed border-forest/25 bg-white/50 p-8 text-center">
          <p className="font-display text-xl font-semibold text-ink">
            Bientôt disponible
          </p>
          <p className="mt-3 text-stone">
            Les actualités d’Ingenio Consulting seront publiées ici au fur et à
            mesure des missions, événements et annonces.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
