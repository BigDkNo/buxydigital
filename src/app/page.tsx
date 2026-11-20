import Link from "next/link";

const services = [
  {
    title: "Site Premium",
    desc: "Website-uri de prezentare moderne, rapide și optimizate pentru conversie.",
    href: "/servicii#site",
  },
  {
    title: "Magazin Online",
    desc: "E-commerce curat, ușor de administrat, pregătit să vândă.",
    href: "/servicii#magazin",
  },
  {
    title: "Randări 3D",
    desc: "Vizualizări realiste pentru arhitectură, produse și spații.",
    href: "/servicii#3d",
  },
  {
    title: "AI & Automatizări",
    desc: "Fluxuri care economisesc timp: lead-uri, follow-up, procese interne.",
    href: "/servicii#ai",
  },
];

const projects = [
  {
    name: "Vanguard Finance",
    type: "Web Design",
    tag: "Fintech",
  },
  {
    name: "Nexora",
    type: "Branding & Web",
    tag: "SaaS",
  },
  {
    name: "Atelier 93",
    type: "Web Design",
    tag: "Arhitectură",
  },
  {
    name: "Verona Premium",
    type: "E-commerce",
    tag: "Retail",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="orb -left-32 -top-32 h-96 w-96 bg-blue-600/30" />
        <div className="orb -right-20 top-40 h-72 w-72 bg-indigo-500/20" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium tracking-wide text-accent">
              Studio digital premium · România
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
              Experiențe digitale care arată{" "}
              <span className="text-gradient">premium</span> și aduc rezultate
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Construim site-uri, magazine online, randări 3D și automatizări
              pentru business-uri care vor să arate profesional și să crească.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm"
              >
                Să vorbim despre proiectul tău
              </Link>
              <Link
                href="/portofoliu"
                className="btn-ghost inline-flex items-center rounded-full px-7 py-3 text-sm"
              >
                Vezi portofoliul →
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="float relative h-48 w-48">
              <div className="absolute inset-0 rotate-12 rounded-2xl border border-blue-500/30 bg-blue-500/5" />
              <div className="absolute inset-6 -rotate-6 rounded-xl border border-blue-400/40 bg-blue-500/10" />
              <div className="absolute inset-12 rounded-lg bg-blue-500/20 glow-blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
              Servicii
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ce construim
            </h2>
            <p className="mt-3 text-muted">
              Ofertă clară, focus pe calitate. Nu facem de toate – facem bine ce
              contează.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card-hover group rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 h-9 w-9 rounded-lg bg-accent-soft flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                Portofoliu
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Proiecte care vorbesc de sine
              </h2>
            </div>
            <Link
              href="/portofoliu"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Vezi toate proiectele →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-950/80 via-slate-900 to-black relative">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted backdrop-blur">
                    {p.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                  <p className="mt-0.5 text-xs text-muted">{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                De ce BuxyDigital
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Calitate peste cantitate
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Nu suntem cea mai ieftină opțiune. Suntem alegerea pentru cine
                vrea un rezultat premium, un proces clar și un partener care
                livrează la timp.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  t: "Look premium",
                  d: "Design modern, curat, recognoscibil – nu template-uri generice.",
                },
                {
                  t: "Proces clar",
                  d: "Brief → ofertă → execuție → livrare. Știi mereu unde te afli.",
                },
                {
                  t: "Rezultat comercial",
                  d: "Site-ul nu e doar frumos. Trebuie să aducă lead-uri și încredere.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-xl border border-border bg-card/60 p-5"
                >
                  <h3 className="text-sm font-semibold text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-muted">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16">
            <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-blue-600/25" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Hai să construim ceva care merită
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted">
                Spune-ne ce ai nevoie. Îți răspundem rapid cu o direcție clară
                și o ofertă transparentă.
              </p>
              <Link
                href="/contact"
                className="btn-primary mt-8 inline-flex items-center rounded-full px-8 py-3.5 text-sm"
              >
                Trimite un mesaj
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
