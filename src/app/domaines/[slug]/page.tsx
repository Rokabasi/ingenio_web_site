import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ContentProse, ServiceList } from "@/components/Content";
import { DomainNav } from "@/components/DomainNav";
import { PageHero } from "@/components/PageHero";
import { domains, getDomain } from "@/data/domains";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return domains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return { title: "Domaine" };
  return {
    title: domain.shortTitle,
    description: domain.summary,
  };
}

export default async function DomainPage({ params }: Props) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();

  return (
    <>
      <PageHero
        eyebrow={domain.eyebrow}
        title={domain.title}
        description={domain.summary}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: domain.shortTitle },
        ]}
      />
      <section className="section-pad section-shell">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_280px] lg:items-start lg:gap-14">
          <div className="min-w-0">
          <ContentProse>
            {domain.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </ContentProse>

          <h2 className="font-display mt-12 text-2xl font-bold text-ink">
            Nos interventions
          </h2>
          <ServiceList items={domain.highlights} />

          {domain.services.length > 0 ? (
            <div className="mt-14">
              <h2 className="font-display text-2xl font-bold text-ink">
                Prestations
              </h2>
              <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {domain.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/domaines/${domain.slug}/${service.slug}`}
                    className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink group-hover:text-leaf">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-stone">{service.summary}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                      Voir →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          </div>
          {/* <div className="min-w-0">
            <DomainNav domain={domain} />
          </div> */}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
