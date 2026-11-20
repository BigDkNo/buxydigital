import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
                B
              </span>
              <span className="text-[15px] font-semibold">BuxyDigital</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Studio digital premium. Construim site-uri, magazine online, randări 3D
              și automatizări care arată profesionist și aduc rezultate.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Navigare
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicii" className="text-foreground/80 hover:text-accent transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="text-foreground/80 hover:text-accent transition-colors">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-foreground/80 hover:text-accent transition-colors">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <a href="mailto:contact@buxydigital.com" className="hover:text-accent transition-colors">
                  contact@buxydigital.com
                </a>
              </li>
              <li>România</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BuxyDigital. Toate drepturile rezervate.</p>
          <p>Site-uri · Magazine · 3D · AI & Automatizări</p>
        </div>
      </div>
    </footer>
  );
}
