"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  intent?: "contact" | "devis" | "candidature";
};

const titles = {
  contact: "Envoyer un message",
  devis: "Formulaire de devis",
  candidature: "Candidature spontanée",
};

const fieldClass = "form-control";

export function ContactForm({ intent = "contact" }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-green/30 bg-white p-6 sm:p-8">
        <p className="banner-title font-display text-2xl font-semibold text-ink">
          {intent === "devis" ? "Demande enregistrée" : "Message envoyé"}
        </p>
        <p className="mt-3 text-stone">
          {intent === "devis"
            ? "Merci. Notre équipe étudie votre besoin et vous recontacte rapidement avec une proposition adaptée."
            : "Merci. Nous vous répondrons dans les meilleurs délais."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 border border-[var(--line)] bg-white p-5 shadow-[0_10px_40px_rgba(21,36,71,0.06)] sm:p-7 lg:p-8"
    >
      <div>
        <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {titles[intent]}
        </p>
        {intent === "devis" ? (
          <p className="mt-2 text-sm leading-relaxed text-stone">
            Les champs marqués d’un astérisque (*) sont obligatoires.
          </p>
        ) : null}
      </div>

      <input type="hidden" name="intent" value={intent} />

      <label className="block">
        <span className="text-sm font-medium text-ink">Nom complet *</span>
        <input name="nom" required autoComplete="name" className={fieldClass} />
      </label>

      {intent === "devis" ? (
        <label className="block">
          <span className="text-sm font-medium text-ink">
            Organisation / entreprise
          </span>
          <input name="organisation" autoComplete="organization" className={fieldClass} />
        </label>
      ) : null}

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="block min-w-0">
          <span className="text-sm font-medium text-ink">Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0">
          <span className="text-sm font-medium text-ink">Téléphone *</span>
          <input
            name="telephone"
            type="tel"
            required={intent === "devis"}
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
          />
        </label>
      </div>

      {intent === "devis" ? (
        <>
          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <label className="block min-w-0">
              <span className="text-sm font-medium text-ink">
                Domaine concerné *
              </span>
              <select
                name="domaine"
                required
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner un domaine
                </option>
                <option>BTP & Génie civil</option>
                <option>Environnement</option>
                <option>Énergies & Électricité</option>
                <option>Assainissement</option>
                <option>SIG & Cartographie</option>
                <option>HSE / QHSE</option>
                <option>Conseil & Études</option>
                <option>Formation (Academia)</option>
                <option>Autre</option>
              </select>
            </label>
            <label className="block min-w-0">
              <span className="text-sm font-medium text-ink">Localisation</span>
              <input
                name="localisation"
                placeholder="Ville / province"
                className={fieldClass}
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium text-ink">
              Type de prestation
            </span>
            <select name="prestation" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              <option>Étude / conception</option>
              <option>Devis technique</option>
              <option>Suivi de travaux</option>
              <option>Audit / diagnostic</option>
              <option>Installation</option>
              <option>Formation</option>
              <option>Autre</option>
            </select>
          </label>
        </>
      ) : null}

      {intent === "candidature" ? (
        <label className="block">
          <span className="text-sm font-medium text-ink">Profil / métier</span>
          <input name="profil" className={fieldClass} />
        </label>
      ) : null}

      <label className="block">
        <span className="text-sm font-medium text-ink">
          {intent === "devis" ? "Description du projet *" : "Message *"}
        </span>
        <textarea
          name="message"
          required
          rows={intent === "devis" ? 6 : 5}
          placeholder={
            intent === "devis"
              ? "Contexte, objectifs, délais souhaités…"
              : undefined
          }
          className={fieldClass}
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto"
      >
        {intent === "devis" ? "Envoyer ma demande" : "Envoyer"}
      </button>
    </form>
  );
}
