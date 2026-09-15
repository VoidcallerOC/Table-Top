import { Link } from "wouter";
import { site } from "@/data/site";

export default function About() {
  return (
    <main id="main-content">
      <section className="relative flex min-h-[80svh] items-end overflow-hidden pb-16 max-md:min-h-[72svh]">
        <img
          src="/images/play-felt.jpg"
          alt="A felt table at Tabletop Gaming Center"
          className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative shell pt-28">
          <p className="eyebrow">About TGC</p>
          <h1 className="display">
            A third
            <br />
            <em>space.</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <p className="lede !max-w-none text-lg text-ink">
            Tabletop Gaming Center is one of New England’s largest friendly local
            game stores — independently owned, fifteen years in, originally tied
            to Hartford’s ConnectiCon, now a room on the Newington / New Britain
            line that stays open so you don’t have to game alone.
          </p>
          <blockquote>
            <p className="section-title !normal-case !tracking-tight">
              “We’re a community center — open from 10 a.m. to 10 p.m. — where
              kids come after school and adults wind down. Most importantly,
              we’re a safe, welcoming space for everyone.”
            </p>
            <footer className="mt-6 text-sm font-semibold">
              Heather Napier
              <span className="mt-1 block font-normal text-muted">
                Publicist and Digital Programs Coordinator
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid gap-4 md:grid-cols-3">
          <article className="pillar">
            <span className="num">01</span>
            <h3>The room</h3>
            <p>
              Seating for two hundred. An in-store library of more than eight
              hundred titles. A thousand games on the wall. Daily Commander.
            </p>
          </article>
          <article className="pillar">
            <span className="num">02</span>
            <h3>Come as you are</h3>
            <p>
              Expert shoppers, first-timers, parents, after-school kids. You
              don’t need the vocabulary to walk in.
            </p>
          </article>
          <article className="pillar">
            <span className="num">03</span>
            <h3>Keep showing up</h3>
            <p>
              Discord, Table Talk, Brunch and Build, a newsletter for the big
              events. The return loop is the business.
            </p>
          </article>
        </div>
        <div className="shell mt-12 flex flex-wrap gap-3">
          <Link href="/guild" className="btn btn-ghost">
            Young Adventurer’s Guild
          </Link>
          <a className="btn" href={site.maps}>
            Get directions <span className="glyph" aria-hidden="true">↗︎</span>
          </a>
        </div>
      </section>
    </main>
  );
}
