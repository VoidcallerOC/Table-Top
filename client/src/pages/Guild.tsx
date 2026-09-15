import { guildPrograms, site } from "@/data/site";

export default function Guild() {
  return (
    <main id="main-content">
      <section className="relative flex min-h-[80svh] items-end overflow-hidden pb-16">
        <img
          src="/images/guild-dice.jpg"
          alt="Dice, pencils, and a character sheet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative shell pt-28">
          <p className="eyebrow">Youth · Education · Community</p>
          <h1 className="display">
            Young
            <br />
            Adventurer’s
            <br />
            <em>Guild.</em>
          </h1>
          <p className="lede mt-6">
            After school, the tables belong to new players. Groups for ages
            10–12 and 13+, run by people who will teach the game before they
            sell you the book.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn" href={`mailto:${site.guildEmail}`}>
              Email the Guild
            </a>
            <a className="btn btn-ghost" href={site.guild} target="_blank" rel="noopener noreferrer">
              Guild page <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">On the calendar</p>
          <h2 className="section-title mb-10">
            Four ways in.
            <br />
            <em>None of them gated.</em>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {guildPrograms.map((program, i) => (
              <article key={program.name} className="pillar">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{program.name}</h3>
                <p>
                  <span className="mb-2 block font-semibold text-ember">{program.ages}</span>
                  {program.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="section-title">
              Scholarships,
              <br />
              parties, Scouts.
            </h2>
            <p className="lede mt-5">
              If a session fee is the reason someone isn’t at the table, tell
              the desk. Custom tables exist for Scout groups, birthdays, family
              learn-to-plays, and local clubs.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a className="btn" href={`mailto:${site.guildEmail}`}>
              {site.guildEmail}
            </a>
            <a className="btn btn-ghost" href={site.phoneHref}>
              Call the desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
