import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Savoirs"
        title="Publications"
        description="Notes techniques, articles et contributions autour de l’ingénierie durable."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Publications" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border border-dashed border-forest/25 bg-white/50 p-8 text-center">
          <p className="font-display text-xl font-semibold text-ink">
            Espace publications
          </p>
          <p className="mt-3 text-stone">
            Cette section accueillera prochainement les publications techniques
            et institutionnelles d’Ingenio Consulting.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
