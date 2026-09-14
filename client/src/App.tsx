import { useState } from 'react';
import { Link, Route, Switch, useLocation } from 'wouter';
import { ArrowUpRight, CalendarDays, Clock3, ExternalLink, Gamepad2, MapPin, Menu, MessageCircle, ShoppingBag, Sparkles, Users, X } from 'lucide-react';

const storeUrl = 'https://www.tabletopgamingcenter.com';

const pathways = [
  { label: 'Visit TGC', detail: 'A real place to hang out, shop, and play.', href: '#visit', icon: MapPin, tone: 'gold' },
  { label: 'Shop Cards', detail: 'Fast access to singles, sealed, and decks.', href: `${storeUrl}/collections/trading-card-games`, icon: ShoppingBag, tone: 'purple' },
  { label: 'Shop Games', detail: 'Board games, RPGs, miniatures, and more.', href: `${storeUrl}/collections/all`, icon: Gamepad2, tone: 'green' },
  { label: 'New to Gaming?', detail: 'Start with a friendly path into the hobby.', href: '#start', icon: Sparkles, tone: 'coral' },
];

const communities = [
  ['Trading Card Games', 'Magic, Pokémon, Lorcana, Flesh and Blood, and Star Wars: Unlimited.'],
  ['RPGs & Roleplay', 'D&D, Call of Cthulhu, and room to make a story your own.'],
  ['Board Games', 'Find your next table game, from quick nights to deep campaigns.'],
  ['Miniatures', 'Warhammer and miniature gaming for hobbyists at every level.'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const items = [['Visit', '#visit'], ['Shop', `${storeUrl}/collections/all`], ['Play', `${storeUrl}/pages/events`], ['Start Here', '#start']];
  return <>
    <div className="announcement"><span>NEWINGTON, CT</span><span>SHOP · PLAY · LEARN · BELONG</span><a href={`${storeUrl}/pages/events`}>See what's happening <ArrowUpRight size={13} /></a></div>
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Tabletop Gaming Center home"><span className="mark">T</span><span>TABLETOP<br /><b>GAMING CENTER</b></span></Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {items.map(([label, href]) => href.startsWith('http') ? <a key={label} href={href}>{label}</a> : <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href={`${storeUrl}/pages/events`} className="nav-accent">Events <ArrowUpRight size={14} /></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  </>;
}

function Footer() {
  return <footer className="footer" id="visit"><div className="footer-main"><div><div className="eyebrow">YOUR LOCAL THIRD SPACE</div><h2>Come find your table.</h2><p className="muted">A friendly local game store in Newington, Connecticut. Stay for a game, a conversation, or the next thing you didn't know you were looking for.</p></div><div className="footer-links"><div><strong>Find your way in</strong><a href={`${storeUrl}/pages/events`}>Events & communities</a><a href="#start">New to gaming?</a><a href={`${storeUrl}/pages/ya-guild`}>Youth & education</a></div><div><strong>Stay connected</strong><a href="https://discord.com/invite/fKcM9NdGjM">Discord <ExternalLink size={12} /></a><a href="https://www.instagram.com/tabletopgamingct/">Instagram <ExternalLink size={12} /></a><a href="https://www.youtube.com/channel/UCU5z2loyO0SrNl3tJRz3v7Q">YouTube <ExternalLink size={12} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tabletop Gaming Center</span><span>741 New Britain Ave · Newington, CT 06111</span><a href="tel:8604362213">(860) 436-2213</a></div></footer>;
}

function Home() {
  return <div><Header /><main>
    <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> A LOCAL PLACE FOR BIG GAMES</div><h1>Find your<br /><em>next table.</em></h1><p className="hero-lede">Tabletop Gaming Center is where Connecticut comes to shop, play, learn, and find their people.</p><div className="hero-actions"><a className="button primary" href={`${storeUrl}/pages/events`}>See upcoming events <ArrowUpRight size={17} /></a><a className="text-link" href="#start">Not sure where to start? <span>→</span></a></div></div><div className="hero-art" aria-label="Illustration of a tabletop game night"><div className="sun" /><div className="dice dice-one">D20</div><div className="dice dice-two">✦</div><div className="table-lines" /><div className="hero-note"><span>741 NEW BRITAIN AVE</span><b>NEWINGTON, CT</b></div><div className="card-stack"><div className="playing-card red">♠<small>TABLE<br />READY</small></div><div className="playing-card black">✦<small>MAKE<br />ROOM</small></div></div></div></section>
    <section className="pathway-section"><div className="section-intro"><div className="eyebrow">WHAT CAN I DO HERE?</div><h2>Start with what<br /><i>you want to do.</i></h2></div><div className="pathway-grid">{pathways.map(({label, detail, href, icon: Icon, tone}) => <a className={`pathway ${tone}`} href={href} key={label}><div className="pathway-icon"><Icon size={20} /></div><div><h3>{label}</h3><p>{detail}</p></div><ArrowUpRight className="pathway-arrow" size={19} /></a>)}</div></section>
    <section className="now-section"><div className="now-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="now-stamp">RIGHT<br />NOW</span><div className="now-card"><CalendarDays size={19} /><span>EVENT<br /><b>CALENDAR</b></span></div><div className="now-card offset"><Users size={19} /><span>FIND YOUR<br /><b>COMMUNITY</b></span></div></div><div className="now-copy"><div className="eyebrow">THE RETURN LOOP</div><h2>There’s always<br /><i>something on.</i></h2><p>Weekly play, tournaments, learn-to-play nights, and recurring community activity make it easy to come back for the next game.</p><a className="button dark" href={`${storeUrl}/pages/events`}>Explore events & communities <ArrowUpRight size={17} /></a><div className="micro-proof"><span><Clock3 size={15} /> Open late most nights</span><span><MessageCircle size={15} /> Friendly to beginners</span></div></div></section>
    <section className="community-section"><div className="section-intro split"><div><div className="eyebrow">FIND YOUR PEOPLE</div><h2>Many games.<br /><i>One community.</i></h2></div><p>Bring the game you already love—or find a new one. The best way in is the one that feels like you.</p></div><div className="community-grid">{communities.map(([title, text], i) => <a className="community-card" href={`${storeUrl}/pages/events`} key={title}><span className="community-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><span className="card-link">Explore <ArrowUpRight size={14} /></span></a>)}</div></section>
    <section className="start-section" id="start"><div className="start-copy"><div className="eyebrow">NO EXPERIENCE REQUIRED</div><h2>New to gaming?<br /><i>You’re in the right place.</i></h2><p>You don't need to know the lingo, own a deck, or have a group already. Start with a question, a beginner-friendly event, or a quick visit to see what's happening.</p><a className="button primary" href={`${storeUrl}/pages/events`}>Find a way in <ArrowUpRight size={17} /></a></div><div className="start-list"><div><span>01</span><strong>Ask us anything</strong><p>Our team can help you choose a game, product, or place to start.</p></div><div><span>02</span><strong>Try a table</strong><p>Look for beginner-friendly events and open play on the calendar.</p></div><div><span>03</span><strong>Come back soon</strong><p>Join the newsletter, Discord, or a community that fits your rhythm.</p></div></div></section>
  </main><Footer /></div>;
}

function About() { return <div><Header /><main className="simple-page"><div className="eyebrow">ABOUT TGC</div><h1>A local place for<br /><em>big games.</em></h1><p className="lead">Tabletop Gaming Center is an established local gaming destination in Newington, Connecticut—home to cards, board games, miniatures, RPGs, organized play, youth programming, and a community that keeps showing up.</p><div className="simple-grid"><div><h3>Come as you are</h3><p>You can shop, play, learn, or just take a look around. Our store is built for experienced players and curious first-timers alike.</p></div><div><h3>Find us in Newington</h3><p>741 New Britain Ave<br />Newington, CT 06111<br /><a href="tel:8604362213">(860) 436-2213</a></p><a className="text-link" href="https://www.google.com/maps/place/Tabletop+Gaming+Center/">Get directions →</a></div></div></main><Footer /></div>; }

function App() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/pages/about-us" component={About} /><Route><Home /></Route></Switch>; }
export default App;
