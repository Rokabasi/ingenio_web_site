import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Certificats" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Certificats"
      description="Attestations et certificats délivrés à l’issue des formations."
      paragraphs={[
        "Ingenio Academia délivre des attestations et certificats à l’issue des formations et programmes validés.",
        "Chaque document pourra être authentifié via le système de vérification numérique par code QR.",
      ]}
    />
  );
}
