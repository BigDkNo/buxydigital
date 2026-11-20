import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu",
  description: "Proiecte BuxyDigital – site-uri, magazine și experiențe digitale premium.",
};

const projects = [
  {
    name: "Vanguard Finance",
    type: "Web Design",
    category: "Fintech",
    description:
      "Site de prezentare pentru o firmă de consultanță financiară. Focus pe încredere, claritate și lead-uri calificate.",
  },
  {
    name: "Nexora",
    type: "Branding & Web",
    category: "SaaS",
    description:
      "Identitate vizuală și landing page pentru un produs SaaS B2B. Look modern, mesaj clar, CTA puternic.",
  },
  {
    name: "Atelier 93",
    type: "Web Design",
    category: "Arhitectură",
    description:
      "Website pentru birou de arhitectură. Portofoliu vizual, proiecte pe categorii, contact simplu.",
  },
  {
    name: "Verona Premium",
    type: "E-commerce",
    category: "Retail",
    description:
      "Magazin online pentru brand de lifestyle. Experiență de cumpărare curată pe mobil și desktop.",
  },
  {
    name: "Horizon Residences",
    type: "Randări 3D",
    category: "Imobiliare",
    description:
      "Set de randări exterioare și interioare pentru un proiect rezidențial – folosite în vânzări și marketing.",
  },
  {
    name: "Flux CRM Setup",
    type: "Automatizări",
    category: "Operațiuni",
    description:
      "Automatizare lead → CRM → follow-up email pentru o agenție de servicii. Timp economisit: ~8h/săptămână.",
  },
];

export default function PortofoliuPage() {
  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Portofoliu
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Proiecte care vorbesc de sine
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            O selecție de lucrări. Fiecare proiect are un obiectiv comercial clar
            – nu doar „să arate frumos”.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-950/90 via-slate-900 to-black relative">
                  <div className="absolute inset-0 bg-grid opacity-25" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted backdrop-blur">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-accent">{p.type}</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Vrei un proiect similar?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Spune-ne ce ai în minte. Îți propunem o direcție și un preț clar.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-6 inline-flex rounded-full px-7 py-3 text-sm"
          >
            Cere o ofertă
          </Link>
        </div>
      </section>
    </>
  );
}
