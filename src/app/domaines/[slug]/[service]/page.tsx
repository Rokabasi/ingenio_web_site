import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ContentProse } from "@/components/Content";
import { DomainNav } from "@/components/DomainNav";
import { PageHero } from "@/components/PageHero";
import { domains, getDomain, getDomainService } from "@/data/domains";

type Props = {
  params: Promise<{ slug: string; service: string }>;
};

export async function generateStaticParams() {
  return domains.flatMap((domain) =>
    domain.services.map((service) => ({
      slug: domain.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const service = getDomainService(slug, serviceSlug);
  if (!service) return { title: "Prestation" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function DomainServicePage({ params }: Props) {
  const { slug, service: serviceSlug } = await params;
  const domain = getDomain(slug);
  const service = getDomainService(slug, serviceSlug);
  if (!domain || !service) notFound();

  const body =
    service.body ??
    [
      service.summary,
      `Dans le cadre de notre offre « ${domain.shortTitle} », Ingenio Consulting mobilise une équipe adaptée pour accompagner cette prestation avec rigueur, méthode et souci de durabilité.`,
    ];

  return (
    <>
      <PageHero
        eyebrow={domain.shortTitle}
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: domain.shortTitle, href: `/domaines/${domain.slug}` },
          { label: service.title },
        ]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <ContentProse>
          {body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </ContentProse>
        <DomainNav domain={domain} currentSlug={service.slug} />
      </section>
      <CtaBand />
    </>
  );
}
