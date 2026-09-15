import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, CalendarDays, ExternalLink, MapPin, Menu, Play, Search, ShoppingBag, X } from 'lucide-react';
import { Route, Switch } from 'wouter';

const storeUrl = 'https://www.tabletopgamingcenter.com';
const eventsUrl = `${storeUrl}/pages/events`;

const shopLinks = [
  { label: 'Magic & Marvel', detail: 'Singles, sealed product, and current releases', href: `${storeUrl}/collections/trading-card-games`, tone: 'orange', product: 'The Mind Stone · Marvel Super Heroes' },
  { label: 'Pokémon & Lorcana', detail: 'Cards, collections, and the next chase card', href: `${storeUrl}/collections/trading-card-games`, tone: 'lilac', product: 'Mew · Celebrations: 25th Anniversary' },
  { label: 'Board games & RPGs', detail: 'Warhammer, miniatures, hobby, and accessories', href: `${storeUrl}/collections/all`, tone: 'mint', product: 'Browse tabletop collections' },
];

const communityLinks = [
  { number: '01', title: 'PLAY', text: 'Find your next table, game night, or organized play event.' },
  { number: '02', title: 'LEARN', text: 'RPGs, hobby, education, and room to ask your first question.' },
  { number: '03', title: 'COMPETE', text: 'Leagues, tournaments, qualifiers, and the thrill of a close match.' },
  { number: '04', title: 'BELONG', text: 'Casual play, youth programming, and a community that keeps showing up.' },
];

const featuredProducts = [
  { name: 'The Mind Stone', set: 'Marvel Super Heroes', price: '$22.20', availability: 'Only 2 units left', image: 'https://www.tabletopgamingcenter.com/cdn/shop/files/e1912879-e7f3-532c-a83e-f678e2e55036_1024x1024.png?v=1786893578', href: `${storeUrl}/products/the-mind-stone-marvel-super-heroes`, tone: 'product-orange' },
  { name: 'Mew (011/025)', set: 'Celebrations: 25th Anniversary', price: '$3.40', availability: 'Only 2 units left', image: 'https://www.tabletopgamingcenter.com/cdn/shop/files/7c3f0f79-038c-560a-9dca-fbcae0553ff5_1024x1024.jpg?v=1733553562', href: `${storeUrl}/products/mew-011-025-celebrations`, tone: 'product-yellow' },
  { name: 'Enlightened Strike', set: 'Welcome to Rathe Unlimited', price: '$11.10', availability: 'Only 2 units left', image: 'https://www.tabletopgamingcenter.com/cdn/shop/products/a5e65036-7d60-441a-80a4-44006dcbd64b_1024x1024.png?v=1643391641', href: `${storeUrl}/products/enlightened-strike-u-wtr159-unlimited-normal`, tone: 'product-lilac' },
  { name: 'Mjolnir, Hammer of Thor', set: 'Marvel Super Heroes', price: '$9.60', availability: 'Only 2 units left', image: 'https://www.tabletopgamingcenter.com/cdn/shop/files/6119b437-2f2f-5cae-8178-cb4eedfc0e0d_1024x1024.png?v=1786893476', href: `${storeUrl}/products/mjolnir-hammer-of-thor-marvel-super-heroes`, tone: 'product-blue' },
  { name: 'Command and Conquer', set: 'History Pack 1 · Flesh and Blood', price: '$21.60', availability: 'Only 3 units left', image: 'https://www.tabletopgamingcenter.com/cdn/shop/files/8bd1319e2f0756157806c3b469ee8486_1024x1024.png?v=1750031638', href: `${storeUrl}/products/command-and-conquer-1hp360`, tone: 'product-mint' },
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
    <div className="hero-copy"><div className="eyebrow"><span className="pulse" /> TABLETOP GAMING CENTER · NEWINGTON, CT</div><h1>Your table<br /><em>is waiting.</em></h1><p className="hero-lede">Cards. Games. RPGs. Events. A place to shop, play, learn, compete, and find your people.</p><div className="hero-actions"><a className="button primary" href={`${storeUrl}/collections/all`}>Shop now <ArrowUpRight size={17} /></a><a className="button dark" href={eventsUrl}>See events <ArrowUpRight size={17} /></a></div><div className="hero-facts"><span><MapPin size={15} /> 741 New Britain Ave</span><span><CalendarDays size={15} /> Open late most days</span></div></div>
    <div className="hero-photo-slot" aria-label="Reserved space for approved TGC store photography"><div className="photo-slot-label"><span>REAL TGC PHOTO SLOT</span><b>STORE / COMMUNITY / PLAY</b></div><div className="photo-slot-note">Replace with approved TGC photography.<br />Do not use generic stock imagery.</div><img src="https://cdn.shopify.com/s/files/1/0514/8888/2879/files/TGC_-_Color.png?v=1656963544" alt="Tabletop Gaming Center" /></div>
  </section>;
}

function Events() {
  return <section className="events-section" id="events"><div className="section-kicker"><span>WHAT'S HAPPENING · LIVE EVENT CALENDAR</span><ArrowDownRight size={22} /></div><div className="events-layout"><div><h2>What's<br /><i>happening?</i></h2><p className="section-lede">TGC's event calendar is the source of truth for current dates, times, registration, and availability. Open it for the live schedule before you head over.</p><a className="button dark" href={eventsUrl}>View all events <ArrowUpRight size={17} /></a></div><div className="event-board"><div className="board-header"><span>FIND YOUR NEXT TABLE</span><span className="live-dot">LIVE SOURCE</span></div><a className="event-row" href={eventsUrl}><span className="event-date">01</span><span><b>Event calendar</b><small>Current schedule · games · community</small></span><ArrowUpRight size={19} /></a><a className="event-row" href={eventsUrl}><span className="event-date">02</span><span><b>Organized play</b><small>Leagues · tournaments · qualifiers</small></span><ArrowUpRight size={19} /></a><a className="event-row" href={eventsUrl}><span className="event-date">03</span><span><b>Casual tables</b><small>Come by, browse the calendar, stay awhile</small></span><ArrowUpRight size={19} /></a><div className="board-footer"><span>DATES + DETAILS ON TGC'S LIVE CALENDAR</span><a href={eventsUrl}>Open ↗</a></div></div></div></section>;
}

function ProductRail() {
  return <section className="product-section" id="products"><div className="product-heading"><div><div className="eyebrow">SHOP WHAT'S HOT · LIVE STORE</div><h2>Good games<br /><i>start here.</i></h2></div><a className="text-link" href={`${storeUrl}/collections/all`}>Browse the full shop <ArrowUpRight size={16} /></a></div><div className="product-rail">{featuredProducts.map(product => <a className={`product-card ${product.tone}`} href={product.href} key={product.name}><div className="product-image"><img src={product.image} alt={`${product.name} — ${product.set}`} /></div><div className="product-meta"><span className="product-category">{product.set}</span><h3>{product.name}</h3><div className="product-price"><strong>{product.price}</strong><span>{product.availability}</span></div></div><ArrowUpRight className="product-arrow" size={17} /></a>)}</div><div className="product-note"><span>PRODUCT DATA SHOWN FROM TGC'S LIVE SHOP</span><span>PRICES + AVAILABILITY CAN CHANGE ↗</span></div></section>;
}

function Community() {
  return <section className="community-section" id="community"><div className="community-heading"><div><div className="eyebrow">THE TGC COMMUNITY</div><h2>Many games.<br /><i>One place.</i></h2></div><p>Whether you have a deck, a campaign, a paintbrush, or just a question, there is a way in.</p></div><div className="community-grid">{communityLinks.map(item => <a href={eventsUrl} className="community-item" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={20} /></a>)}</div></section>;
}

function Shop() {
  return <section className="shop-section" id="shop"><div className="shop-top"><div><div className="eyebrow">FIND YOUR GAME · SHOP TGC</div><h2>What's on<br /><i>the shelf?</i></h2></div><p>Real categories, real collections, and a direct path into the existing Shopify / BinderPOS store. Browse online, then come play in person.</p></div><div className="shop-grid">{shopLinks.map(link => <a className={`shop-item ${link.tone}`} href={link.href} key={link.label}><span className="shop-arrow"><ArrowUpRight size={19} /></span><h3>{link.label}</h3><p>{link.detail}</p><span className="shop-product">{link.product}</span><span className="shop-link">Explore collection ↗</span></a>)}</div></section>;
}

function Learn() {
  return <section className="learn-section" id="learn"><div className="learn-poster"><span className="poster-small">TGC PRESENTS</span><strong>YOUNG<br /><em>ADVENTURER'S</em><br />GUILD</strong><span className="poster-rule" /><span className="poster-small">YOUTH · EDUCATION · COMMUNITY</span></div><div className="learn-copy"><div className="eyebrow">A PLACE TO GROW INTO THE HOBBY</div><h2>Start with a<br /><i>question.</i></h2><p>TGC's youth programming and educational resources make tabletop culture welcoming for younger adventurers, families, and anyone learning the ropes.</p><a className="text-link" href={`${storeUrl}/pages/ya-guild`}>Explore Young Adventurer's Guild <ArrowUpRight size={16} /></a></div></section>;
}

function Content() {
  return <section className="content-section"><div className="content-copy"><div className="eyebrow">WATCH / FOLLOW / EXPLORE</div><h2>The table<br /><i>continues online.</i></h2><p>Keep up with TGC beyond the store through its real content and community channels.</p><div className="social-links"><a href="https://www.youtube.com/channel/UCU5z2loyO0SrNl3tJRz3v7Q">YouTube <ExternalLink size={13} /></a><a href="https://www.twitch.tv/tabletopgamingcenter">Twitch <ExternalLink size={13} /></a><a href="https://www.instagram.com/tabletopgamingct/">Instagram <ExternalLink size={13} /></a></div></div><div className="content-art"><div className="play-button"><Play size={25} fill="currentColor" /></div><span>TABLE TALK<br /><b>LIVE FROM TGC</b></span></div></section>;
}

function Articles() {
  return <section className="articles-section"><div className="articles-heading"><div><div className="eyebrow">FROM THE TABLE · REAL TGC STORIES</div><h2>Keep up<br /><i>with the room.</i></h2></div><a className="text-link" href={`${storeUrl}/blogs/news`}>Read more articles <ArrowUpRight size={16} /></a></div><div className="article-grid"><a href={`${storeUrl}/blogs/news/thats-no-weekly-thats-a-qualifier`}><span className="article-number">01 · EVENT STORY</span><h3>That’s No Weekly, That’s A Qualifier</h3><p>The inner workings of the store, its events, and the people who keep the tables moving.</p><span className="article-link">Continue reading ↗</span></a><a href={`${storeUrl}/blogs/news/your-local-games-store-3rd-space`}><span className="article-number">02 · COMMUNITY</span><h3>Your Local Games Store &amp; 3rd Space</h3><p>Cards, TTRPGs, board-game events, and educational programs for children ages 10–17.</p><span className="article-link">Continue reading ↗</span></a><div className="newsletter-block"><span className="article-number">STAY IN THE LOOP</span><h3>Big events.<br />Straight to your inbox.</h3><p>Sign up for TGC's newsletter for notifications about big events and more.</p><a href={`${storeUrl}/#newsletter`} className="button primary">Subscribe <ArrowUpRight size={16} /></a></div></div></section>;
}

function Visit() {
  return <section className="visit-section" id="visit"><div className="visit-stamp">COME<br /><b>PLAY</b></div><div className="visit-copy"><div className="eyebrow">FIND US IN NEWINGTON</div><h2>Your next table<br /><i>is here.</i></h2><p>Tabletop Gaming Center<br />741 New Britain Ave<br />Newington, CT 06111</p><div className="hours"><b>STORE HOURS</b><span>Mon–Thu & Sat · 10am–10pm</span><span>Friday · 10am–11pm</span><span>Sunday · 10am–8pm</span></div><div className="visit-actions"><a className="button primary" href="https://www.google.com/maps/place/Tabletop+Gaming+Center/">Get directions <ArrowUpRight size={17} /></a><a className="phone-link" href="tel:8604362213">(860) 436-2213</a></div></div><div className="visit-map"><span className="map-pin"><MapPin size={23} /></span><span className="map-label">741 NEW BRITAIN AVE<br /><b>NEWINGTON, CT</b></span><div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" /></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="footer-top"><div><div className="footer-mark"><span className="mark">T</span><span>TABLETOP<br /><b>GAMING CENTER</b></span></div><p>A local place for big games.<br />Newington, Connecticut.</p></div><div className="footer-nav"><div><strong>Explore</strong><a href="#shop">Shop</a><a href="#events">Events</a><a href="#community">Community</a><a href="#visit">Visit</a></div><div><strong>Stay connected</strong><a href="https://discord.com/invite/fKcM9NdGjM">Discord <ExternalLink size={12} /></a><a href="https://www.instagram.com/tabletopgamingct/">Instagram <ExternalLink size={12} /></a><a href={`${storeUrl}/pages/about-us`}>About TGC <ArrowUpRight size={12} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tabletop Gaming Center</span><span className="footer-credit">Website by <a href="https://forge-ct.com">Forge-CT</a></span></div></footer>;
}

function Home() { return <div><Header /><main><Hero /><ProductRail /><Events /><Community /><Shop /><Learn /><Articles /><Content /><Visit /></main><Footer /></div>; }
function About() { return <div><Header /><main className="simple-page"><div className="eyebrow">ABOUT TGC</div><h1>A local place for<br /><em>big games.</em></h1><p className="lead">Tabletop Gaming Center is an established local gaming destination in Newington, Connecticut—home to cards, board games, miniatures, RPGs, organized play, youth programming, and a community that keeps showing up.</p><div className="simple-grid"><div><h3>Come as you are</h3><p>You can shop, play, learn, or just take a look around. Our store is built for experienced players and curious first-timers alike.</p></div><div><h3>Find us in Newington</h3><p>741 New Britain Ave<br />Newington, CT 06111<br /><a href="tel:8604362213">(860) 436-2213</a></p><a className="text-link" href="https://www.google.com/maps/place/Tabletop+Gaming+Center/">Get directions →</a></div></div></main><Footer /></div>; }
function App() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/pages/about-us" component={About} /><Route><Home /></Route></Switch>; }
export default App;
