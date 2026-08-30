import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ContentProse } from "@/components/Content";
import { DomainNav } from "@/components/DomainNav";
import { PageHero } from "@/components/PageHero";
import { getDomain, getDomainService } from "@/data/domains";

type Props = {
  params: Promise<{ slug: string; nested: string }>;
};

const nestedContent: Record<
  string,
  { title: string; summary: string; body: string[] }
> = {
  "eaux-usees": {
    title: "Traitement des eaux usées",
    summary:
      "Solutions de traitement adaptées aux contextes urbains et ruraux.",
    body: [
      "Nous concevons des solutions de traitement des eaux usées visant à réduire les impacts sanitaires et environnementaux.",
      "Nos approches tiennent compte des contraintes locales, des usages et des objectifs de salubrité publique.",
    ],
  },
  valorisation: {
    title: "Valorisation des eaux traitées",
    summary:
      "Réutilisation et valorisation des eaux traitées lorsque les conditions le permettent.",
    body: [
      "Lorsque les conditions techniques et sanitaires le permettent, nous accompagnons la valorisation et la réutilisation des eaux traitées.",
      "Ces solutions contribuent à préserver les ressources en eau tout en favorisant des pratiques durables.",
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "assainissement", nested: "eaux-usees" },
    { slug: "assainissement", nested: "valorisation" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nested } = await params;
  const content = nestedContent[nested];
  return { title: content?.title ?? "Solution" };
}

export default async function NestedDomainPage({ params }: Props) {
  const { slug, nested } = await params;
  if (slug !== "assainissement") notFound();

  const domain = getDomain(slug);
  const parent = getDomainService(slug, "solutions-ecologiques");
  const content = nestedContent[nested];
  if (!domain || !parent || !content) notFound();

  return (
    <>
      <PageHero
        eyebrow="Solutions sanitaires écologiques"
        title={content.title}
        description={content.summary}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: domain.shortTitle, href: `/domaines/${domain.slug}` },
          {
            label: parent.title,
            href: `/domaines/${domain.slug}/solutions-ecologiques`,
          },
          { label: content.title },
        ]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <ContentProse>
          {content.body.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </ContentProse>
        <DomainNav domain={domain} currentSlug="solutions-ecologiques" />
      </section>
      <CtaBand />
    </>
  );
}
