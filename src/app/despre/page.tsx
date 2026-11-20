import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Cine suntem și cum lucrăm la BuxyDigital – studio digital premium din România.",
};

export default function DesprePage() {
  return (
    <>
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Despre
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Un studio mic, standarde mari
          </h1>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            BuxyDigital există pentru business-uri care vor o prezență digitală
            premium – nu „încă un site ieftin”. Lucrăm focusat, livrăm curat și
            tratăm fiecare proiect ca pe o piesă de portofoliu.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-white">Cum lucrăm</h2>
              <ol className="mt-6 space-y-5">
                {[
                  {
                    n: "01",
                    t: "Brief & discuție",
                    d: "Înțelegem obiectivul, publicul și constrângerile. Fără briefing vag.",
                  },
                  {
                    n: "02",
                    t: "Ofertă clară",
                    d: "Preț, termen, ce e inclus și ce nu. Avans înainte de start.",
                  },
                  {
                    n: "03",
                    t: "Execuție",
                    d: "Design → feedback → dezvoltare → testare. Comunicare constantă.",
                  },
                  {
                    n: "04",
                    t: "Livrare & suport",
                    d: "Predare ordonată, documentație scurtă, opțiune de mentenanță.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="text-sm font-mono text-accent">{step.n}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {step.t}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-white">Ce ne ghidează</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Calitate peste volum – mai bine 3 proiecte bune decât 10 mediocre
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Transparență la preț și termene
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Design care servește business-ul, nu doar ego-ul creativ
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Relații pe termen lung, nu one-shot
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-white">Unde operăm</h2>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Suntem bazați în România și lucrăm remote cu clienți din toată
                  țara. Pentru proiecte selecte, suntem deschiși și la colaborări
                  internaționale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Hai să ne cunoaștem
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Un mesaj scurt e suficient ca să începem.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-6 inline-flex rounded-full px-7 py-3 text-sm"
          >
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}
