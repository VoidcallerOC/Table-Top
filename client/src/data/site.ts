export const shopUrl = "https://www.tabletopgamingcenter.com";

export const site = {
  name: "Tabletop Gaming Center",
  shortName: "TGC",
  tagline: "A third space, centered around feeling good.",
  lede: "You don’t have to game alone on your coffee table anymore. Come have a seat at ours.",
  address: {
    line1: "741 New Britain Ave",
    city: "Newington",
    state: "CT",
    zip: "06111",
    plaza: "Twin City Plaza",
    note: "On the Newington / New Britain line, next to Family Dollar and Veggie World. Private lot. Wheelchair accessible.",
  },
  phone: "(860) 436-2213",
  phoneHref: "tel:8604362213",
  email: "events@tabletopgamingcenter.com",
  maps: "https://www.google.com/maps/place/Tabletop+Gaming+Center/@41.6663,-72.7593,17z",
  events: `${shopUrl}/pages/events`,
  guild: `${shopUrl}/pages/ya-guild`,
  newsletter: `${shopUrl}/#newsletter`,
  search: `${shopUrl}/search`,
  cart: `${shopUrl}/cart`,
  shopAll: `${shopUrl}/collections/all`,
  discord: "https://discord.com/invite/fKcM9NdGjM",
  instagram: "https://www.instagram.com/tabletopgamingct/",
  youtube: "https://www.youtube.com/channel/UCU5z2loyO0SrNl3tJRz3v7Q",
  twitch: "https://www.twitch.tv/tabletopgamingcenter",
} as const;

export const hours = [
  { day: "Sunday", openMin: 10 * 60, closeMin: 20 * 60, label: "10am – 8pm" },
  { day: "Monday", openMin: 10 * 60, closeMin: 22 * 60, label: "10am – 10pm" },
  { day: "Tuesday", openMin: 10 * 60, closeMin: 22 * 60, label: "10am – 10pm" },
  { day: "Wednesday", openMin: 10 * 60, closeMin: 22 * 60, label: "10am – 10pm" },
  { day: "Thursday", openMin: 10 * 60, closeMin: 22 * 60, label: "10am – 10pm" },
  { day: "Friday", openMin: 10 * 60, closeMin: 23 * 60, label: "10am – 11pm" },
  { day: "Saturday", openMin: 10 * 60, closeMin: 22 * 60, label: "10am – 10pm" },
] as const;

export const nav = [
  { label: "Visit", to: "/#visit" },
  { label: "Floor", to: "/#floor" },
  { label: "Play", to: "/#play" },
  { label: "Guild", to: "/guild" },
  { label: "About", to: "/about" },
] as const;

export const visitPath = [
  {
    number: "01",
    title: "The door",
    text: "Open 10am most days. Friday runs to 11. Twin City Plaza, 741 New Britain Ave. Private lot. Come as you are.",
  },
  {
    number: "02",
    title: "The floor",
    text: "Cards, board games, Warhammer, D&D, hobby, and an in-store library of 800 titles. If it’s on a table in New England, it’s probably here.",
  },
  {
    number: "03",
    title: "The table",
    text: "Room for two hundred. A daily Commander table. Weekly events. Or just sit down. The room is the point.",
  },
] as const;

export const floorGames = [
  {
    name: "Magic: The Gathering",
    detail: "Singles, sealed, Commander every day, draft and constructed during the week.",
    href: `${shopUrl}/collections/mtg-preorders`,
    tint: "#e85c24",
  },
  {
    name: "Pokémon",
    detail: "Singles, sealed, and a Sunday league for trainers of every level.",
    href: `${shopUrl}/collections/popular-pokemon-singles`,
    tint: "#f0c020",
  },
  {
    name: "Disney Lorcana",
    detail: "In-stock singles and weekly play. The chase cards, without the scavenger hunt.",
    href: `${shopUrl}/collections/lorcana-singles-instock`,
    tint: "#6b3fa0",
  },
  {
    name: "Marvel & Star Wars Unlimited",
    detail: "New universes, same glass case. Singles and sealed on the floor.",
    href: `${shopUrl}/collections/swu-singles`,
    tint: "#2f6fff",
  },
  {
    name: "Flesh and Blood",
    detail: "Armory nights, constructed, and a deep singles case.",
    href: `${shopUrl}/collections/popular-fab`,
    tint: "#c43c3c",
  },
  {
    name: "Warhammer & miniatures",
    detail: "40K, Age of Sigmar, paints, and a Little League for younger hobbyists.",
    href: `${shopUrl}/collections/all`,
    tint: "#1a9a62",
  },
  {
    name: "RPGs & Dungeons & Dragons",
    detail: "Books, dice, and more than ten youth groups a week — plus tables for your campaign.",
    href: `${shopUrl}/collections/all`,
    tint: "#e85c24",
  },
  {
    name: "Board games",
    detail: "More than a thousand titles to buy, and eight hundred in the library to play tonight.",
    href: `${shopUrl}/collections/all`,
    tint: "#d4b483",
  },
] as const;

export const weeklyRhythm = [
  {
    when: "Daily",
    title: "Casual Commander",
    text: "A table that’s already going. Pull up a chair.",
  },
  {
    when: "Weekdays",
    title: "Organized play",
    text: "Draft, constructed, Pokémon, Lorcana, Star Wars Unlimited, Flesh and Blood, One Piece, Gundam, Vanguard.",
  },
  {
    when: "Mon & Fri",
    title: "Casual board gaming",
    text: "First-timers and regulars. Ask the desk to teach you something.",
  },
  {
    when: "Sunday",
    title: "Pokémon League",
    text: "Trainers of every age. Promos, games, and a $5 in-store promise.",
  },
  {
    when: "First Thursday",
    title: "Tabletop Testing Chamber",
    text: "TTRPGs beyond D&D, run by Game Master Elle.",
  },
] as const;

export const guildPrograms = [
  {
    name: "Youth Dungeons & Dragons",
    ages: "Ages 10–12 and 13+",
    detail:
      "More than ten groups a week, three-hour sessions. $30 a session, or prepay to save. Scholarships exist — ask.",
  },
  {
    name: "Warhammer Little League",
    ages: "Youth hobby",
    detail:
      "Ten-week seasons covering 40K, Age of Sigmar, Blood Bowl, and whatever the room is excited about.",
  },
  {
    name: "Tabletop Testing Chamber",
    ages: "First Thursday",
    detail:
      "A monthly table for games that aren’t D&D. Led by Game Master Elle. $30, or use a D&D session pass.",
  },
  {
    name: "Pokémon League",
    ages: "All ages · Sunday",
    detail:
      "Casual Play! Pokémon league. Earn promos, learn the game, meet other trainers. $5 spent in-store.",
  },
] as const;

export const articles = [
  {
    number: "01",
    kicker: "Community",
    title: "Your Local Games Store & 3rd Space",
    text: "Great Day Connecticut stopped by. Cards, TTRPGs, board-game nights, and programs for ages 10–17.",
    href: `${shopUrl}/blogs/news/your-local-games-store-3rd-space`,
  },
  {
    number: "02",
    kicker: "Feeling good",
    title: "Centered Around Feeling Good",
    text: "Take a break. Unwind. The store is open so you don’t have to game alone on your coffee table.",
    href: `${shopUrl}/blogs/news/tabletop-gaming-store-centered-around-feeling-good`,
  },
  {
    number: "03",
    kicker: "Events",
    title: "That’s No Weekly, That’s A Qualifier",
    text: "The inner workings of the store, the events, and the people who keep the tables moving.",
    href: `${shopUrl}/blogs/news/that-s-no-weekly-that-s-a-qualifier`,
  },
] as const;

export const channels = [
  {
    name: "Discord",
    detail: "Event updates, intro threads, and a thousand people who already saved you a seat.",
    href: site.discord,
  },
  {
    name: "YouTube",
    detail: "Table Talk, Tabletop Plays, and Tabletop Travel Agency — the store, on a camera.",
    href: site.youtube,
  },
  {
    name: "Twitch",
    detail: "Live from the room when the tables are loud.",
    href: site.twitch,
  },
  {
    name: "Brunch and Build",
    detail: "Sunday livestream. Salem talks while building Gunpla and kits. No stakes. Just hobby.",
    href: site.youtube,
  },
] as const;
