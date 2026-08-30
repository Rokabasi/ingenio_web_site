import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Formateurs" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Formateurs"
      description="Des professionnels et experts mobilisés pour transmettre des compétences utiles."
      paragraphs={[
        "Nos formateurs sont issus des métiers de l’ingénierie, de l’environnement, du HSE, de la géomatique, de l’énergie et de la formation professionnelle.",
        "Ils conjuguent expertise technique et pédagogie pour accompagner efficacement les apprenants.",
      ]}
    />
  );
}
