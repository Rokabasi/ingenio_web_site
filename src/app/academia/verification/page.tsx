import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { VerificationForm } from "@/components/VerificationForm";

export const metadata: Metadata = { title: "Vérification QR Code" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Authentification"
        title="Vérification par QR Code"
        description="Authentifiez les certificats et attestations délivrés par Ingenio Academia."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ingenio Academia", href: "/academia" },
          { label: "Vérification QR" },
        ]}
      />
      <section className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
        <VerificationForm />
      </section>
      <CtaBand
        primaryHref="/contact"
        primaryLabel="Nous contacter"
        secondaryHref="/academia/certificats"
        secondaryLabel="Certificats"
      />
    </>
  );
}
