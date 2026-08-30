import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">
        Erreur 404
      </p>
      <h1 className="banner-title font-display mt-3 text-4xl font-bold text-ink">
        Page introuvable
      </h1>
      <p className="mt-4 text-stone">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
      >
        Retour à l’accueil
      </a>
    </section>
  );
}
