import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Stages" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Stages"
      description="Accueil, encadrement et accompagnement des stagiaires académiques et professionnels."
      paragraphs={[
        "Ingenio Academia favorise la mise en pratique des connaissances et l’acquisition de compétences directement utiles au monde professionnel.",
        "Les stages sont encadrés au sein des équipes projets afin d’exposer les stagiaires à des situations concrètes d’ingénierie, d’environnement et de technologies durables.",
      ]}
    />
  );
}
