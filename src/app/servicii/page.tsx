import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Site-uri premium, magazine online, randări 3D și automatizări AI – oferta BuxyDigital.",
};

const services = [
  {
    id: "site",
    title: "Site Premium",
    subtitle: "Prezență digitală care inspiră încredere",
    description:
      "Website-uri de prezentare pentru business-uri care vor să arate profesionist. Design modern, structură clară, optimizare SEO de bază și viteză bună pe mobil.",
    includes: [
      "Design custom (nu template generic)",
      "Până la 6–8 pagini",
      "Versiune mobil optimizată",
      "Formular de contact + tracking de bază",
      "Livrare pe hostingul tău sau Vercel",
    ],
    from: "de la 1.800 €",
  },
  {
    id: "magazin",
    title: "Magazin Online",
    subtitle: "E-commerce pregătit să vândă",
    description:
      "Magazine online curate, ușor de administrat, cu focus pe experiența de cumpărare și conversie. Shopify sau soluții custom, după nevoie.",
    includes: [
      "Setup magazin (Shopify / WooCommerce / custom)",
      "Design produs + checkout clar",
      "Integrare plăți & livrare",
      "Training scurt de administrare",
      "Optimizare mobil",
    ],
    from: "de la 2.500 €",
  },
  {
    id: "3d",
    title: "Randări 3D",
    subtitle: "Vizualizări care vând înainte să existe produsul",
    description:
      "Randări realiste pentru arhitectură, interior, produse și prezentări comerciale. Ideale pentru agenții imobiliare, constructori și branduri de produs.",
    includes: [
      "Modelare & iluminare profesională",
      "Imagini high-resolution",
      "Variante de materiale / unghiuri",
      "Opțional: tur virtual / animație scurtă",
    ],
    from: "de la 400 € / scenă",
  },
  {
    id: "ai",
    title: "AI & Automatizări",
    subtitle: "Procese care rulează fără tine",
    description:
      "Automatizări pentru lead-uri, follow-up, facturare, notificări și fluxuri interne. Integrăm Make, n8n, CRM și unelte AI ca să economisești timp real.",
    includes: [
      "Analiză procese actuale",
      "Fluxuri Make / n8n",
      "Integrare CRM + email + formulare",
      "Chatbot / asistenți AI (opțional)",
      "Documentație & predare",
    ],
    from: "de la 800 €",
  },
];

export default function ServiciiPage() {
  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Servicii
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ce oferim
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Patru direcții clare. Fără listă interminabilă de „facem orice”.
            Focus pe calitate și rezultat.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-5">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_280px]">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{s.title}</h2>
                  <p className="mt-1 text-sm text-accent">{s.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-between rounded-xl border border-border bg-background/50 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Preț orientativ
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {s.from}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm"
                  >
                    Cere ofertă
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Ai nevoie de o combinație?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Multe proiecte combină site + automatizări sau magazin + design.
            Spune-ne ce vrei să obții – construim pachetul potrivit.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-6 inline-flex rounded-full px-7 py-3 text-sm"
          >
            Hai să discutăm
          </Link>
        </div>
      </section>
    </>
  );
}
