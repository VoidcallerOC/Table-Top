import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, CalendarDays, ExternalLink, MapPin, Menu, Play, Search, ShoppingBag, X } from 'lucide-react';
import { Route, Switch } from 'wouter';

const storeUrl = 'https://www.tabletopgamingcenter.com';
const eventsUrl = `${storeUrl}/pages/events`;

const shopLinks = [
  { label: 'Trading card games', detail: 'Magic, Pokémon, Lorcana & more', href: `${storeUrl}/collections/trading-card-games`, tone: 'orange' },
  { label: 'Board games & RPGs', detail: 'Find your next campaign or game night', href: `${storeUrl}/collections/all`, tone: 'lilac' },
  { label: 'Miniatures & hobby', detail: 'Warhammer, paints, tools & supplies', href: `${storeUrl}/collections/all`, tone: 'mint' },
];

const communityLinks = [
  { number: '01', title: 'PLAY', text: 'Find your next table, game night, or organized play event.' },
  { number: '02', title: 'LEARN', text: 'RPGs, hobby, education, and room to ask your first question.' },
  { number: '03', title: 'COMPETE', text: 'Leagues, tournaments, qualifiers, and the thrill of a close match.' },
  { number: '04', title: 'BELONG', text: 'Casual play, youth programming, and a community that keeps showing up.' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="announcement"><span>NEWINGTON, CONNECTICUT</span><span className="announcement-middle">A LOCAL PLACE FOR BIG GAMES</span><a href={eventsUrl}>See what's happening <ArrowUpRight size={14} /></a></div>
    <header className="site-header">
      <a href="/" className="wordmark" aria-label="Tabletop Gaming Center home"><span className="mark">T</span><span className="wordmark-text">TABLETOP<br /><b>GAMING CENTER</b></span></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <a href="#shop" onClick={close}>Shop</a><a href="#events" onClick={close}>Events</a><a href="#community" onClick={close}>Play</a><a href="#learn" onClick={close}>Learn</a><a href="#visit" onClick={close}>Visit</a>
        <span className="nav-divider" /><a href={`${storeUrl}/search`} aria-label="Search the store"><Search size={17} /></a><a href={`${storeUrl}/cart`} aria-label="Shopping cart"><ShoppingBag size={17} /></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  </>;
}

function Hero() {
  return <section className="hero">
    <div className="hero-copy"><div className="eyebrow"><span className="pulse" /> MORE THAN A GAME STORE</div><h1>Play something.<br /><em>Meet someone.</em><br />Stay a while.</h1><p className="hero-lede">Tabletop Gaming Center is a place to shop, play, learn, compete, and find your people in Newington, Connecticut.</p><div className="hero-actions"><a className="button primary" href={eventsUrl}>See what's happening <ArrowUpRight size={17} /></a><a className="text-link" href={`${storeUrl}/collections/all`}>Shop the store <span>↗</span></a></div></div>
    <div className="hero-visual" aria-label="A colorful abstract tabletop scene"><div className="hero-grid" /><div className="hero-sun" /><div className="hero-die die-one">20</div><div className="hero-die die-two">✦</div><div className="hero-ticket"><span>TABLETOP<br />GAMING<br /><b>CENTER</b></span><small>NEWINGTON · CT</small></div><div className="hero-caption">COME AS YOU ARE<br /><b>FIND YOUR TABLE</b></div></div>
  </section>;
}

function Events() {
  return <section className="events-section" id="events"><div className="section-kicker"><span>THIS WEEK / EVERY WEEK</span><ArrowDownRight size={22} /></div><div className="events-layout"><div><h2>What's<br /><i>happening?</i></h2><p className="section-lede">Game nights, organized play, tournaments, and community events are all part of the rhythm here. Check the live calendar for the latest schedule, times, and registration details.</p><a className="button dark" href={eventsUrl}>View all events <ArrowUpRight size={17} /></a></div><div className="event-board"><div className="board-header"><span>THE LIVE CALENDAR</span><span className="live-dot">UP TO DATE</span></div><div className="board-empty"><CalendarDays size={30} /><div><strong>Find your next reason to come by.</strong><p>See what's upcoming at TGC, from casual play to organized events.</p></div><a href={eventsUrl} aria-label="Open live events calendar"><ArrowUpRight size={21} /></a></div><div className="board-footer"><span>EVENTS · COMMUNITY · PLAY</span><a href={eventsUrl}>Open calendar ↗</a></div></div></div></section>;
}

function Community() {
  return <section className="community-section" id="community"><div className="community-heading"><div><div className="eyebrow">THE TGC COMMUNITY</div><h2>Many games.<br /><i>One place.</i></h2></div><p>Whether you have a deck, a campaign, a paintbrush, or just a question, there is a way in.</p></div><div className="community-grid">{communityLinks.map(item => <a href={eventsUrl} className="community-item" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={20} /></a>)}</div></section>;
}

function Shop() {
  return <section className="shop-section" id="shop"><div className="shop-top"><div><div className="eyebrow">SHOP TABLETOP</div><h2>Bring home<br /><i>the next game.</i></h2></div><p>Start with what you know or follow your curiosity. The existing TGC store has the cards, games, RPGs, miniatures, and hobby supplies to keep your table moving.</p></div><div className="shop-grid">{shopLinks.map(link => <a className={`shop-item ${link.tone}`} href={link.href} key={link.label}><span className="shop-arrow"><ArrowUpRight size={19} /></span><h3>{link.label}</h3><p>{link.detail}</p><span className="shop-link">Explore collection ↗</span></a>)}</div></section>;
}

function Learn() {
  return <section className="learn-section" id="learn"><div className="learn-poster"><span className="poster-small">TGC PRESENTS</span><strong>YOUNG<br /><em>ADVENTURER'S</em><br />GUILD</strong><span className="poster-rule" /><span className="poster-small">YOUTH · EDUCATION · COMMUNITY</span></div><div className="learn-copy"><div className="eyebrow">A PLACE TO GROW INTO THE HOBBY</div><h2>Start with a<br /><i>question.</i></h2><p>TGC's youth programming and educational resources make tabletop culture welcoming for younger adventurers, families, and anyone learning the ropes.</p><a className="text-link" href={`${storeUrl}/pages/ya-guild`}>Explore Young Adventurer's Guild <ArrowUpRight size={16} /></a></div></section>;
}

function Content() {
  return <section className="content-section"><div className="content-copy"><div className="eyebrow">WATCH / FOLLOW / EXPLORE</div><h2>The table<br /><i>continues online.</i></h2><p>Keep up with TGC beyond the store through its real content and community channels.</p><div className="social-links"><a href="https://www.youtube.com/channel/UCU5z2loyO0SrNl3tJRz3v7Q">YouTube <ExternalLink size={13} /></a><a href="https://www.twitch.tv/tabletopgamingcenter">Twitch <ExternalLink size={13} /></a><a href="https://www.instagram.com/tabletopgamingct/">Instagram <ExternalLink size={13} /></a></div></div><div className="content-art"><div className="play-button"><Play size={25} fill="currentColor" /></div><span>TABLE TALK<br /><b>LIVE FROM TGC</b></span></div></section>;
}

function Visit() {
  return <section className="visit-section" id="visit"><div className="visit-stamp">COME<br /><b>PLAY</b></div><div className="visit-copy"><div className="eyebrow">FIND US IN NEWINGTON</div><h2>Your next table<br /><i>is here.</i></h2><p>Tabletop Gaming Center<br />741 New Britain Ave<br />Newington, CT 06111</p><div className="visit-actions"><a className="button primary" href="https://www.google.com/maps/place/Tabletop+Gaming+Center/">Get directions <ArrowUpRight size={17} /></a><a className="phone-link" href="tel:8604362213">(860) 436-2213</a></div></div><div className="visit-map"><span className="map-pin"><MapPin size={23} /></span><span className="map-label">741 NEW BRITAIN AVE<br /><b>NEWINGTON, CT</b></span><div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" /></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="footer-top"><div><div className="footer-mark"><span className="mark">T</span><span>TABLETOP<br /><b>GAMING CENTER</b></span></div><p>A local place for big games.<br />Newington, Connecticut.</p></div><div className="footer-nav"><div><strong>Explore</strong><a href="#shop">Shop</a><a href="#events">Events</a><a href="#community">Community</a><a href="#visit">Visit</a></div><div><strong>Stay connected</strong><a href="https://discord.com/invite/fKcM9NdGjM">Discord <ExternalLink size={12} /></a><a href="https://www.instagram.com/tabletopgamingct/">Instagram <ExternalLink size={12} /></a><a href={`${storeUrl}/pages/about-us`}>About TGC <ArrowUpRight size={12} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tabletop Gaming Center</span><span className="footer-credit">Website by <a href="https://forge-ct.com">Forge-CT</a></span></div></footer>;
}

function Home() { return <div><Header /><main><Hero /><Events /><Community /><Shop /><Learn /><Content /><Visit /></main><Footer /></div>; }
function About() { return <div><Header /><main className="simple-page"><div className="eyebrow">ABOUT TGC</div><h1>A local place for<br /><em>big games.</em></h1><p className="lead">Tabletop Gaming Center is an established local gaming destination in Newington, Connecticut—home to cards, board games, miniatures, RPGs, organized play, youth programming, and a community that keeps showing up.</p><div className="simple-grid"><div><h3>Come as you are</h3><p>You can shop, play, learn, or just take a look around. Our store is built for experienced players and curious first-timers alike.</p></div><div><h3>Find us in Newington</h3><p>741 New Britain Ave<br />Newington, CT 06111<br /><a href="tel:8604362213">(860) 436-2213</a></p><a className="text-link" href="https://www.google.com/maps/place/Tabletop+Gaming+Center/">Get directions →</a></div></div></main><Footer /></div>; }
function App() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/pages/about-us" component={About} /><Route><Home /></Route></Switch>; }
export default App;
