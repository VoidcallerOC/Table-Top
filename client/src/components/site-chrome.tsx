import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Tabletop Gaming Center home">
      <img
        src="/images/tgc-logo.png"
        alt="Tabletop Gaming Center"
        width={312}
        height={152}
        className="h-14 w-auto shrink-0 object-contain md:h-16"
      />
    </Link>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-3 left-3 z-50 -translate-y-[180%] bg-ember px-3 py-2 text-sm font-bold text-[#fffaf4] focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 border-b border-wood/70 bg-paper/86 backdrop-blur-md">
      <div className="shell flex min-h-[4.7rem] items-center justify-between gap-6">
        <Brand />
        <nav
          className={`max-md:absolute max-md:top-[4.7rem] max-md:right-0 max-md:left-0 max-md:flex-col max-md:items-start max-md:gap-4 max-md:border-b max-md:border-wood max-md:bg-paper max-md:px-5 max-md:py-5 ${open ? "max-md:flex" : "max-md:hidden"} flex items-center gap-6`}
          aria-label="Primary"
        >
          {nav.map((item) =>
            item.to === "/guild" || item.to === "/about" ? (
              <Link
                key={item.label}
                href={item.to}
                onClick={close}
                className="text-[0.88rem] font-semibold tracking-wide no-underline hover:text-ember"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.to}
                onClick={close}
                className="text-[0.88rem] font-semibold tracking-wide no-underline hover:text-ember"
              >
                {item.label}
              </a>
            ),
          )}
          <a href={site.maps} className="btn btn-small md:hidden" onClick={close} target="_blank" rel="noopener noreferrer">
            Visit us
          </a>
        </nav>
        <a href={site.maps} className="btn btn-small hidden md:inline-flex" target="_blank" rel="noopener noreferrer">
          Visit us
        </a>
        <button
          type="button"
          className="p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-wood bg-cream">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <span className="font-serif text-2xl font-extrabold tracking-tight uppercase">TGC</span>
          <p className="mt-4 max-w-sm text-sm text-muted">
            {site.tagline}
            <br />
            {site.address.plaza}, {site.address.city}, {site.address.state}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <strong className="eyebrow mb-1">In the room</strong>
            <a href="/#visit" className="no-underline hover:text-ember">Visit</a>
            <a href="/#floor" className="no-underline hover:text-ember">The floor</a>
            <a href="/#play" className="no-underline hover:text-ember">Events</a>
            <Link href="/guild" className="no-underline hover:text-ember">Young Adventurer’s Guild</Link>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="eyebrow mb-1">Stay</strong>
            <a href={site.discord} className="no-underline hover:text-ember" target="_blank" rel="noopener noreferrer">
              Discord <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <a href={site.instagram} className="no-underline hover:text-ember" target="_blank" rel="noopener noreferrer">
              Instagram <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <a href={site.newsletter} className="no-underline hover:text-ember" target="_blank" rel="noopener noreferrer">
              Newsletter <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <Link href="/about" className="no-underline hover:text-ember">About TGC</Link>
          </div>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-wood py-4 text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Tabletop Gaming Center</span>
        <span>
          Website by{" "}
          <a href="https://www.forge-ct.com" className="text-ember no-underline hover:underline" target="_blank" rel="noopener noreferrer">
            FORGE CT
          </a>
        </span>
      </div>
    </footer>
  );
}
