export type Position = "Goalkeeper" | "Defender" | "Midfielder" | "Forward";

export type SquadPlayer = {
  name: string;
  position: Position;
  club: string;
};

export type FeaturedPlayer = SquadPlayer & {
  firstName: string;
  lastName: string;
  number: string;
  role: string;
  idleImage: string;
  actionImage: string;
  metric: string;
  metricLabel: string;
  quote: string;
  focalIdle?: string;
  focalAction?: string;
};

export const featuredPlayers: FeaturedPlayer[] = [
  {
    name: "Achraf Hakimi",
    firstName: "Achraf",
    lastName: "Hakimi",
    position: "Defender",
    club: "Paris Saint-Germain",
    number: "02",
    role: "Captain / Right back",
    idleImage: "/players/hakimi-main.jpg",
    actionImage: "/players/hakimi-celebration.webp",
    metric: "C",
    metricLabel: "Captain",
    quote: "Velocity with purpose.",
    focalIdle: "50% 20%",
    focalAction: "50% 24%",
  },
  {
    name: "Brahim Díaz",
    firstName: "Brahim",
    lastName: "Díaz",
    position: "Forward",
    club: "Real Madrid",
    number: "10",
    role: "Creator / Free role",
    idleImage: "/players/brahim-main.jpg",
    actionImage: "/players/brahim-celeb.jpg",
    metric: "10",
    metricLabel: "Playmaker",
    quote: "Between the lines, beyond the expected.",
    focalIdle: "50% 18%",
    focalAction: "50% center",
  },
  {
    name: "Yassine Bounou",
    firstName: "Yassine",
    lastName: "Bounou",
    position: "Goalkeeper",
    club: "Al-Hilal",
    number: "01",
    role: "Goalkeeper / Last guard",
    idleImage: "/players/bono-main.jpg",
    actionImage: "/players/bono-celeb.jpg",
    metric: "03",
    metricLabel: "Qatar clean sheets",
    quote: "Calm is a competitive advantage.",
    focalIdle: "50% 14%",
    focalAction: "50% 18%",
  },
  {
    name: "Ismael Saibari",
    firstName: "Ismael",
    lastName: "Saibari",
    position: "Midfielder",
    club: "PSV Eindhoven",
    number: "11",
    role: "Midfield / Late runner",
    idleImage: "/players/saibari-main.jpg",
    actionImage: "/players/saibari-celeb.jpg",
    metric: "11",
    metricLabel: "Vertical threat",
    quote: "Arrive late. Leave a mark.",
    focalIdle: "50% 16%",
    focalAction: "50% 18%",
  },
  {
    name: "Ayyoub Bouaddi",
    firstName: "Ayyoub",
    lastName: "Bouaddi",
    position: "Midfielder",
    club: "LOSC Lille",
    number: "06",
    role: "Midfield / Tempo setter",
    idleImage: "/players/bouadi-main.jpg",
    actionImage: "/players/bouadi-celeb.jpg",
    metric: "NX",
    metricLabel: "Next generation",
    quote: "Play forward. Fear nothing.",
    focalIdle: "50% 16%",
    focalAction: "50% 20%",
  },
];

export const squad: SquadPlayer[] = [
  { name: "Yassine Bounou", position: "Goalkeeper", club: "Al-Hilal" },
  { name: "Munir El Kajoui", position: "Goalkeeper", club: "RS Berkane" },
  { name: "Reda Tagnaouti", position: "Goalkeeper", club: "AS FAR" },
  { name: "Noussair Mazraoui", position: "Defender", club: "Manchester United" },
  { name: "Anass Salah-Eddine", position: "Defender", club: "PSV Eindhoven" },
  { name: "Youssef Belammari", position: "Defender", club: "Al-Ahly" },
  { name: "Achraf Hakimi", position: "Defender", club: "Paris Saint-Germain" },
  { name: "Zakaria El Ouahdi", position: "Defender", club: "Genk" },
  { name: "Chadi Riad", position: "Defender", club: "Crystal Palace" },
  { name: "Redouane Halhal", position: "Defender", club: "KV Mechelen" },
  { name: "Issa Diop", position: "Defender", club: "Fulham" },
  { name: "Marwane Saâdane", position: "Defender", club: "Al-Fateh" },
  { name: "Samir El Mourabet", position: "Midfielder", club: "RC Strasbourg" },
  { name: "Ayyoub Bouaddi", position: "Midfielder", club: "LOSC Lille" },
  { name: "Neil El Aynaoui", position: "Midfielder", club: "AS Roma" },
  { name: "Sofyan Amrabat", position: "Midfielder", club: "Real Betis" },
  { name: "Azzedine Ounahi", position: "Midfielder", club: "Girona" },
  { name: "Bilal El Khannouss", position: "Midfielder", club: "Stuttgart" },
  { name: "Ismael Saibari", position: "Midfielder", club: "PSV Eindhoven" },
  { name: "Chemsdine Talbi", position: "Forward", club: "Sunderland" },
  { name: "Soufiane Rahimi", position: "Forward", club: "Al-Ain" },
  { name: "Ayoub El Kaabi", position: "Forward", club: "Olympiacos" },
  { name: "Brahim Díaz", position: "Forward", club: "Real Madrid" },
  { name: "Gessime Yassine", position: "Forward", club: "RC Strasbourg" },
  { name: "Ayoube Amaimouni", position: "Forward", club: "Eintracht Frankfurt" },
  { name: "Amine Sbaï", position: "Forward", club: "SCO Angers" },
];

export const heritage = [
  { name: "Ahmed Faras", era: "1965–1979", mark: "African Player of the Year · 1975" },
  { name: "Badou Zaki", era: "1979–1992", mark: "World Cup pioneer · Mexico 1986" },
  { name: "Noureddine Naybet", era: "1990–2006", mark: "115 caps · Defensive standard" },
  { name: "Mustapha Hadji", era: "1993–2002", mark: "African Player of the Year · 1998" },
];
