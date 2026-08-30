import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Formations" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Formations"
      description="Programmes professionnels et ateliers pratiques pour renforcer vos compétences."
      paragraphs={[
        "Ingenio Academia conçoit des formations adaptées aux besoins des étudiants, professionnels et organisations.",
        "Les parcours couvrent l’environnement, le HSE/QHSE, le SIG, le BTP, les énergies renouvelables, l’assainissement, la gestion de projets et les outils numériques.",
      ]}
    />
  );
}
