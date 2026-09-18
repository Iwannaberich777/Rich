// Top 20 fortunes in the world (approx., September 2026)
// Base source: Forbes Real-Time Billionaires
// Includes Asian representation with $50B+ net worth
const BILLIONAIRES = [
  {
    rank: 1, name: "Elon Musk", flag: "US", country: "United States",
    worth: 839, source: "Tesla, SpaceX, xAI",
    quip: "Changes his mind faster than you change socks, but he's still the richest man on the planet (and probably on Mars)."
  },
  {
    rank: 2, name: "Larry Page", flag: "US", country: "United States",
    worth: 257, source: "Google / Alphabet",
    quip: "Co-founded Google so you could ask it how to get as rich as him."
  },
  {
    rank: 3, name: "Sergey Brin", flag: "US", country: "United States",
    worth: 237, source: "Google / Alphabet",
    quip: "The other Google co-founder. Yes, there are two, and together they could buy your entire city."
  },
  {
    rank: 4, name: "Jeff Bezos", flag: "US", country: "United States",
    worth: 224, source: "Amazon",
    quip: "Started out selling books from a garage. Now owns a yacht so big it needs its own zip code."
  },
  {
    rank: 5, name: "Mark Zuckerberg", flag: "US", country: "United States",
    worth: 222, source: "Meta / Facebook",
    quip: "Asked for your birthday and your best friend from school, and gave you memes and notifications in return."
  },
  {
    rank: 6, name: "Larry Ellison", flag: "US", country: "United States",
    worth: 190, source: "Oracle",
    quip: "Owns almost an entire island in Hawaii. History's most uncomfortable neighbor."
  },
  {
    rank: 7, name: "Bernard Arnault and family", flag: "FR", country: "France",
    worth: 171, source: "LVMH",
    quip: "Owns the brand behind your expensive handbag. And the one next to it. And the whole store."
  },
  {
    rank: 8, name: "Jensen Huang", flag: "US", country: "United States",
    worth: 154, source: "Nvidia",
    quip: "Makes the chips that bring your PC to tears of joy (and your credit card to tears of pain)."
  },
  {
    rank: 9, name: "Warren Buffett", flag: "US", country: "United States",
    worth: 149, source: "Berkshire Hathaway",
    quip: "Has been investing since before the word 'investing' existed. Still eats $5 hamburgers."
  },
  {
    rank: 10, name: "Amancio Ortega", flag: "ES", country: "Spain",
    worth: 148, source: "Zara / Inditex",
    quip: "Probably designed the shirt you're wearing right now."
  },
  {
    rank: 11, name: "Michael Dell", flag: "US", country: "United States",
    worth: 141, source: "Dell Technologies",
    quip: "Built his company out of a college dorm room. Could now buy the whole university."
  },
  {
    rank: 12, name: "Steve Ballmer", flag: "US", country: "United States",
    worth: 126, source: "Microsoft / LA Clippers",
    quip: "Former Microsoft CEO and the most enthusiastic man with a microphone in business history."
  },
  {
    rank: 13, name: "Carlos Slim Helú and family", flag: "MX", country: "Mexico",
    worth: 125, source: "Telecommunications",
    quip: "Controls so much of the telecom sector, you might owe him money right now."
  },
  {
    rank: 14, name: "Changpeng Zhao", flag: "CA", country: "Canada",
    worth: 110, source: "Binance",
    quip: "Founded Binance. Your brother-in-law who 'invested in crypto' is still waiting for his moment."
  },
  {
    rank: 15, name: "Michael Bloomberg", flag: "US", country: "United States",
    worth: 109, source: "Bloomberg LP",
    quip: "Has a financial terminal named after him, and once nearly ran an entire city by himself."
  },
  {
    rank: 16, name: "Bill Gates", flag: "US", country: "United States",
    worth: 108, source: "Microsoft",
    quip: "Dropped out of Harvard to found Microsoft. Your computer science teacher still hasn't topped that."
  },
  {
    rank: 17, name: "Françoise Bettencourt Meyers and family", flag: "FR", country: "France",
    worth: 100, source: "L'Oréal",
    quip: "The L'Oréal heiress. Because she's worth it... literally, about $100 billion."
  },
  {
    rank: 18, name: "Mukesh Ambani", flag: "IN", country: "India",
    worth: 99.7, source: "Reliance Industries",
    quip: "Lives in a 27-story house with its own cinema, gym, and helipad. Better WiFi than your office."
  },
  {
    rank: 19, name: "Zhang Yiming", flag: "CN", country: "China",
    worth: 69.3, source: "ByteDance / TikTok",
    quip: "The creator of TikTok. You owe him hours of your life... and he owes you a few billion."
  },
  {
    rank: 20, name: "Zhong Shanshan", flag: "CN", country: "China",
    worth: 68.1, source: "Nongfu Spring (bottled water)",
    quip: "Became a billionaire selling bottled water. Literally turned water into gold."
  }
];
