import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Tabletop Gaming Center home">
      <img
        src="/images/tgc-logo.png"
        alt=""
        width={48}
        height={48}
        className="size-11 shrink-0 object-contain md:size-12"
      />
      <span className="font-serif text-[1.35rem] font-extrabold tracking-tight uppercase md:text-[1.5rem]">
        TGC
      </span>
    </Link>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-3 left-3 z-50 -translate-y-[180%] bg-ember px-3 py-2 text-sm font-bold text-paper focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 bg-paper/55 backdrop-blur-md">
      <div className="shell flex min-h-[5.4rem] items-center justify-between gap-6">
        <Brand />
        <nav
          className={`max-md:absolute max-md:top-[5.4rem] max-md:right-0 max-md:left-0 max-md:flex-col max-md:items-start max-md:gap-5 max-md:border-b max-md:border-wood max-md:bg-paper/95 max-md:px-5 max-md:py-5 ${open ? "max-md:flex" : "max-md:hidden"} flex items-center gap-7`}
          aria-label="Primary"
        >
          {nav.map((item) =>
            item.to === "/guild" || item.to === "/about" ? (
              <Link
                key={item.label}
                href={item.to}
                onClick={close}
                className="text-[0.92rem] font-semibold no-underline hover:text-ember"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.to}
                onClick={close}
                className="text-[0.92rem] font-semibold no-underline hover:text-ember"
              >
                {item.label}
              </a>
            ),
          )}
          <a href={site.maps} className="btn btn-small md:hidden" onClick={close}>
            Visit us
          </a>
        </nav>
        <a href={site.maps} className="btn btn-small hidden md:inline-flex">
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
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div>
          <span className="font-serif text-2xl font-extrabold tracking-tight uppercase">TGC</span>
          <p className="mt-5 max-w-sm text-sm text-muted">
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
            <a href={site.discord} className="no-underline hover:text-ember">
              Discord <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <a href={site.instagram} className="no-underline hover:text-ember">
              Instagram <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <a href={site.newsletter} className="no-underline hover:text-ember">
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
          <a href="https://www.forge-ct.com" className="text-ember no-underline hover:underline">
            FORGE CT
          </a>
        </span>
      </div>
    </footer>
  );
}
