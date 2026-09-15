import { Link } from "wouter";
import { OpenNow } from "@/components/open-now";
import {
  articles,
  channels,
  floorGames,
  hours,
  shopUrl,
  site,
  visitPath,
  weeklyRhythm,
} from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HobbyShop",
  name: "Tabletop Gaming Center",
  url: "https://www.tabletopgamingcenter.com",
  telephone: "+1-860-436-2213",
  email: "events@tabletopgamingcenter.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "741 New Britain Ave",
    addressLocality: "Newington",
    addressRegion: "CT",
    postalCode: "06111",
    addressCountry: "US",
  },
};

const marquee = [
  "Magic: The Gathering",
  "Pokémon",
  "Lorcana",
  "Warhammer",
  "Dungeons & Dragons",
  "Commander",
  "Young Adventurer’s Guild",
  "Twin City Plaza",
  "Flesh and Blood",
  "Board games",
];

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <VisitPath />
      <RoomBreak />
      <Floor />
      <Play />
      <GuildTeaser />
      <Belong />
      <Stories />
      <Visit />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden pb-24 max-md:min-h-[92svh] md:pb-20">
      <img
        src="/images/play-felt.jpg"
        alt="A felt game table set with cards and dice"
        className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative shell w-full pt-28">
        <p className="eyebrow">
          <OpenNow className="inline-flex items-center" />
        </p>
        <h1 className="display max-w-5xl">
          Come have
          <br />
          a <em>seat.</em>
        </h1>
        <p className="lede mt-6 max-w-lg text-ink/90">
          A third space, centered around feeling good. Fifteen years on the
          Newington / New Britain line. Two hundred seats. You don’t have to
          game alone on your coffee table anymore.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a className="btn" href={site.maps}>
            Plan your visit <span className="glyph" aria-hidden="true">↗︎</span>
          </a>
          <a className="btn btn-ghost" href={site.events}>
            What’s on tonight
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <span aria-hidden="true"> ◆ </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisitPath() {
  return (
    <section className="section">
      <div className="shell">
        <p className="eyebrow">What we are</p>
        <h2 className="section-title">
          Door. Floor. <em>Table.</em>
        </h2>
        <p className="lede mt-5 mb-12">
          The page you check from the parking lot — then the room you stay in.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {visitPath.map((step) => (
            <article key={step.number} className="pillar">
              <span className="num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomBreak() {
  return (
    <section className="photo-break" aria-label="The room">
      <img
        src="/images/floor-shelves.jpg"
        alt="Board game shelves at Tabletop Gaming Center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-paper via-paper/25 to-transparent" />
      <div className="relative shell pb-14">
        <p className="eyebrow">The room</p>
        <h2 className="section-title max-w-4xl">
          Built for two hundred.
          <br />
          <em>Open so you show up.</em>
        </h2>
      </div>
    </section>
  );
}

function Floor() {
  return (
    <section id="floor" className="section">
      <div className="shell">
        <p className="eyebrow">On the shelves</p>
        <h2 className="section-title">
          A shop you can
          <br />
          <em>walk into.</em>
        </h2>
        <p className="lede mt-5 mb-12">
          Not an inventory wall. The live catalog still lives on the shop — this
          is the map of the room.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {floorGames.map((game) => (
            <a key={game.name} href={game.href} className="game-card">
              <span className="glow" style={{ background: game.tint }} />
              <h3>{game.name}</h3>
              <p>{game.detail}</p>
            </a>
          ))}
        </div>
        <a className="btn mt-10" href={site.shopAll}>
          Open the full shop <span className="glyph" aria-hidden="true">↗︎</span>
        </a>
      </div>
    </section>
  );
}

function Play() {
  return (
    <section id="play" className="section bg-cream">
      <div className="shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">This week</p>
          <h2 className="section-title">
            A weekly
            <br />
            <em>rhythm.</em>
          </h2>
          <p className="lede mt-5">
            Dates, fees, and seats live on TGC’s calendar. This is the shape of
            the week so you know the room before you walk in.
          </p>
          <a className="btn mt-8" href={site.events}>
            Open the live calendar <span className="glyph" aria-hidden="true">↗︎</span>
          </a>
        </div>
        <ol className="hours-list">
          {weeklyRhythm.map((row) => (
            <li key={row.title} className="!block">
              <a href={site.events} className="flex items-start justify-between gap-4 no-underline">
                <span>
                  <b className="block font-serif text-2xl font-extrabold tracking-tight uppercase">
                    {row.title}
                  </b>
                  <span className="mt-1 block text-sm text-muted">{row.text}</span>
                </span>
                <span className="shrink-0 font-serif text-sm font-extrabold tracking-widest text-ember uppercase">
                  {row.when}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GuildTeaser() {
  return (
    <section className="photo-break min-h-[75svh]">
      <img src="/images/guild-dice.jpg" alt="Dice and a character sheet on the table" />
      <div className="absolute inset-0 bg-linear-to-r from-paper via-paper/70 to-paper/20" />
      <div className="relative shell py-24">
        <p className="eyebrow">Young Adventurer’s Guild</p>
        <h2 className="section-title max-w-3xl">
          Start with a
          <br />
          <em>question.</em>
        </h2>
        <p className="lede mt-5">
          After-school tables for ages 10–12 and 13+. More than ten youth D&D
          groups a week. Scholarships exist. Ask the desk.
        </p>
        <Link href="/guild" className="btn mt-8">
          Explore the Guild <span className="glyph" aria-hidden="true">↗︎</span>
        </Link>
      </div>
    </section>
  );
}

function Belong() {
  return (
    <section id="community" className="section">
      <div className="shell">
        <p className="eyebrow">The table continues</p>
        <h2 className="section-title mb-12">
          A room you can
          <br />
          <em>come back to.</em>
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {channels.map((channel) => (
            <a key={channel.name} href={channel.href} className="game-card min-h-36">
              <h3>
                {channel.name} <span className="glyph" aria-hidden="true">↗︎</span>
              </h3>
              <p>{channel.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="section bg-cream">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">From the table</p>
            <h2 className="section-title">
              How the room
              <br />
              <em>talks.</em>
            </h2>
          </div>
          <a className="btn btn-ghost" href={`${shopUrl}/blogs/news`}>
            All articles <span className="glyph" aria-hidden="true">↗︎</span>
          </a>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {articles.map((article) => (
            <a key={article.title} href={article.href} className="game-card min-h-64">
              <span className="mb-auto font-serif text-sm font-extrabold tracking-widest text-ember uppercase">
                {article.number} · {article.kicker}
              </span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="section">
      <div className="shell grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="section-title">
            Twin City Plaza,
            <br />
            <em>Newington.</em>
          </h2>
          <p className="lede mt-5">
            Tabletop Gaming Center
            <br />
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            <span className="mt-3 block">{site.address.note}</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="btn" href={site.maps}>
              Get directions <span className="glyph" aria-hidden="true">↗︎</span>
            </a>
            <a className="btn btn-ghost" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </div>
        <div className="border border-wood bg-cream p-6">
          <p className="eyebrow">Store hours</p>
          <ul className="hours-list">
            {hours.map((row) => (
              <li key={row.day}>
                <span className="font-semibold">{row.day}</span>
                <span className="text-muted">{row.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
