import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { domains } from "@/data/domains";
import { site } from "@/data/site";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "L'entreprise", href: "/entreprise" },
      { label: "Academia", href: "/academia" },
      { label: "Expertise et domaines", href: "/expertise" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Domaines",
    links: domains.slice(0, 5).map((d) => ({
      label: d.shortTitle,
      href: `/expertise#${d.slug}`,
    })),
  },
  {
    title: "Actions",
    links: [
      { label: "Demander un devis", href: "/contact/devis" },
      { label: "Candidature", href: "/contact/candidature" },
      { label: "Vérifier un certificat", href: "/academia/verification" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-deep text-sand">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div className="min-w-0">
          <BrandLogo size="footer" />
          <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-white sm:mt-5 sm:text-base">
            {site.slogan}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            Depuis {site.founded}, au service des projets en {site.country}.
          </p>
          <div className="mt-6 space-y-1 text-sm text-white/65">
            <p>{site.address}</p>
            <a className="hover:text-crimson-soft" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <Link href="/contact/devis" className="hover:text-white">
            Demander un devis
          </Link>
        </div>
      </div>
    </footer>
  );
}
