import type { Metadata } from "next";
import { AcademiaSubpage } from "@/components/AcademiaSubpage";

export const metadata: Metadata = { title: "Calendrier" };

export default function Page() {
  return (
    <AcademiaSubpage
      title="Calendrier"
      description="Consultez les prochaines sessions de formation, ateliers et webinaires."
      paragraphs={[
        "Le calendrier des formations sera progressivement enrichi avec les sessions ouvertes, les ateliers pratiques et les programmes sur mesure.",
        "Pour être informé des prochaines dates, contactez-nous ou inscrivez-vous à une session d’intérêt.",
      ]}
    />
  );
}
