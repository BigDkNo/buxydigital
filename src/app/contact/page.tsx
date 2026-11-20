"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Placeholder – conectează la Formspree / Make / API propriu
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Contact
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hai să vorbim
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Spune-ne pe scurt ce ai nevoie. Răspundem de obicei în maxim 24 de
            ore lucrătoare.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-[1fr_340px]">
            <div>
              {sent ? (
                <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8">
                  <h2 className="text-xl font-semibold text-white">
                    Mesaj trimis
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Mulțumim. Revenim în curând cu un răspuns.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-medium text-muted"
                      >
                        Nume *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-medium text-muted"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-xs font-medium text-muted"
                    >
                      Firmă / proiect
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                      placeholder="Opțional"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-medium text-muted"
                    >
                      Interesat de
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selectează
                      </option>
                      <option value="site">Site Premium</option>
                      <option value="magazin">Magazin Online</option>
                      <option value="3d">Randări 3D</option>
                      <option value="ai">AI & Automatizări</option>
                      <option value="altceva">Altceva / combinație</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-muted"
                    >
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                      placeholder="Ce vrei să construim? Buget orientativ, termen etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full rounded-full px-6 py-3 text-sm disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? "Se trimite..." : "Trimite mesajul"}
                  </button>
                </form>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-white">Email</h3>
                <a
                  href="mailto:contact@buxydigital.com"
                  className="mt-2 block text-sm text-accent hover:underline"
                >
                  contact@buxydigital.com
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-white">Răspuns</h3>
                <p className="mt-2 text-sm text-muted">
                  De obicei în 24h lucrătoare. Pentru proiecte urgente, menționează
                  în mesaj.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-white">Ce e util de inclus</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• Tip de proiect</li>
                  <li>• Termen dorit</li>
                  <li>• Buget orientativ (dacă știi)</li>
                  <li>• Link-uri de referință / site actual</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
