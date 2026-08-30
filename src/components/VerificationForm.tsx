"use client";

import { FormEvent, useState } from "react";

export function VerificationForm() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) {
      setResult(null);
      return;
    }
    setResult(
      "La vérification en ligne sera connectée à la base des certificats Ingenio Academia. Pour une authentification immédiate, contactez-nous avec le numéro figurant sur le document.",
    );
  }

  return (
    <div className="min-w-0 border border-[var(--line)] bg-white/70 p-5 sm:p-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-ink">
            Code du certificat / QR
          </span>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ex. ICA-2026-XXXX"
            className="form-control"
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-sm bg-navy px-5 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-navy-mid sm:w-auto sm:py-3"
        >
          Vérifier
        </button>
      </form>
      {result ? (
        <p className="mt-6 border-t border-[var(--line)] pt-5 text-sm leading-relaxed text-stone">
          {result}
        </p>
      ) : null}
    </div>
  );
}
