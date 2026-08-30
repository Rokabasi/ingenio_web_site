import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { InscriptionForm } from "@/components/InscriptionForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Inscription" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Ingenio Academia"
        title="Inscription"
        description="Exprimez votre intérêt pour une formation ou un programme de perfectionnement."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ingenio Academia", href: "/academia" },
          { label: "Inscription" },
        ]}
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <InscriptionForm />
      </section>
      <CtaBand secondaryHref="/academia/calendrier" secondaryLabel="Calendrier" />
    </>
  );
}
