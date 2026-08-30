import { CtaBand } from "@/components/CtaBand";
import { ContentProse } from "@/components/Content";
import { PageHero } from "@/components/PageHero";

export function AcademiaSubpage({
  title,
  description,
  paragraphs,
}: {
  title: string;
  description: string;
  paragraphs: string[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Ingenio Academia"
        title={title}
        description={description}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Ingenio Academia", href: "/academia" },
          { label: title },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ContentProse>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </ContentProse>
      </section>
      <CtaBand
        primaryHref="/academia/inscription"
        primaryLabel="S’inscrire"
        secondaryHref="/academia"
        secondaryLabel="Retour Academia"
      />
    </>
  );
}
