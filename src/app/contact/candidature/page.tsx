import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Candidature" };

export default function CandidaturePage() {
  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Candidature"
        description="Rejoignez une équipe pluridisciplinaire engagée dans des projets durables."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Candidature" },
        ]}
      />
      <section className="section-pad section-shell max-w-2xl">
        <ContactForm intent="candidature" />
      </section>
    </>
  );
}
