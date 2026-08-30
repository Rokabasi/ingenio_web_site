import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Espace apprenant" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Espace apprenant"
      description="Un espace numérique pour suivre votre parcours et vos attestations."
      paragraphs={[
        "L’espace apprenant permettra de consulter le parcours de formation, les sessions suivies, ainsi que les attestations et certificats délivrés.",
        "Cette interface sera déployée progressivement avec le portail académique d’Ingenio Academia.",
      ]}
    />
  );
}
