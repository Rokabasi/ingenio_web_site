"use client";

import { FormEvent, useState } from "react";

const fields = [
  { name: "nom", label: "Nom complet", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telephone", label: "Téléphone", type: "tel", required: false },
  {
    name: "formation",
    label: "Formation souhaitée",
    type: "text",
    required: true,
  },
] as const;

export function InscriptionForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-moss/30 bg-white/80 p-8">
        <p className="font-display text-2xl font-semibold text-ink">
          Demande enregistrée
        </p>
        <p className="mt-3 text-stone">
          Merci. Notre équipe Academia vous recontactera pour finaliser votre
          inscription.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-[var(--line)] bg-white/70 p-6 sm:p-8">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="text-sm font-medium text-ink">
            {field.label}
            {field.required ? " *" : ""}
          </span>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            className="mt-2 w-full border border-[var(--line)] bg-mist px-3 py-2.5 text-ink outline-none ring-moss focus:ring-2"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full border border-[var(--line)] bg-mist px-3 py-2.5 text-ink outline-none ring-moss focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
