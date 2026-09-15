// Top 20 fortunas del mundo (aprox., septiembre 2026)
// Fuente base: Forbes Real-Time Billionaires
// Incluye representación asiática con fortunas de 50B+ USD
const BILLIONAIRES = [
  {
    rank: 1, name: "Elon Musk", flag: "US", country: "Estados Unidos",
    worth: 839, source: "Tesla, SpaceX, xAI",
    quip: "Cambia de opinión más rápido de lo que tú cambias de calcetines, pero sigue siendo el más rico del planeta (y probablemente de Marte)."
  },
  {
    rank: 2, name: "Larry Page", flag: "US", country: "Estados Unidos",
    worth: 257, source: "Google / Alphabet",
    quip: "Co-fundó Google para que tú pudieras preguntarle cómo ser tan rico como él."
  },
  {
    rank: 3, name: "Sergey Brin", flag: "US", country: "Estados Unidos",
    worth: 237, source: "Google / Alphabet",
    quip: "El otro fundador de Google. Sí, hay dos, y entre ambos podrían comprar tu ciudad entera."
  },
  {
    rank: 4, name: "Jeff Bezos", flag: "US", country: "Estados Unidos",
    worth: 224, source: "Amazon",
    quip: "Empezó vendiendo libros desde un garaje. Ahora tiene un yate tan grande que necesita su propio código postal."
  },
  {
    rank: 5, name: "Mark Zuckerberg", flag: "US", country: "Estados Unidos",
    worth: 222, source: "Meta / Facebook",
    quip: "Te pidió tu cumpleaños y a tu mejor amigo del cole, y a cambio te dio memes y notificaciones."
  },
  {
    rank: 6, name: "Larry Ellison", flag: "US", country: "Estados Unidos",
    worth: 190, source: "Oracle",
    quip: "Es dueño de casi toda una isla en Hawái. El vecino más incómodo de la historia."
  },
  {
    rank: 7, name: "Bernard Arnault y familia", flag: "FR", country: "Francia",
    worth: 171, source: "LVMH",
    quip: "El dueño de tu bolso caro. Y del bolso caro de al lado. Y de la tienda entera."
  },
  {
    rank: 8, name: "Jensen Huang", flag: "US", country: "Estados Unidos",
    worth: 154, source: "Nvidia",
    quip: "Fabrica los chips que hacen llorar de emoción a tu PC (y de dolor a tu tarjeta de crédito)."
  },
  {
    rank: 9, name: "Warren Buffett", flag: "US", country: "Estados Unidos",
    worth: 149, source: "Berkshire Hathaway",
    quip: "Invierte desde antes de que existiera la palabra 'inversión'. Sigue comiendo hamburguesas de 5 dólares."
  },
  {
    rank: 10, name: "Amancio Ortega", flag: "ES", country: "España",
    worth: 148, source: "Zara / Inditex",
    quip: "Probablemente diseñó la camiseta que llevas puesta ahora mismo."
  },
  {
    rank: 11, name: "Michael Dell", flag: "US", country: "Estados Unidos",
    worth: 141, source: "Dell Technologies",
    quip: "Montó su empresa desde el dormitorio de la universidad. Ahora podría comprarse la universidad entera."
  },
  {
    rank: 12, name: "Steve Ballmer", flag: "US", country: "Estados Unidos",
    worth: 126, source: "Microsoft / LA Clippers",
    quip: "Ex-CEO de Microsoft y el hombre más entusiasta con un micrófono en la historia de los negocios."
  },
  {
    rank: 13, name: "Carlos Slim Helú y familia", flag: "MX", country: "México",
    worth: 125, source: "Telecomunicaciones",
    quip: "Controla tanto del sector telecom que es posible que le debas dinero ahora mismo."
  },
  {
    rank: 14, name: "Changpeng Zhao", flag: "CA", country: "Canadá",
    worth: 110, source: "Binance",
    quip: "Fundó Binance. Tu cuñado que 'invirtió en cripto' sigue esperando su momento."
  },
  {
    rank: 15, name: "Michael Bloomberg", flag: "US", country: "Estados Unidos",
    worth: 109, source: "Bloomberg LP",
    quip: "Tiene una terminal financiera con su nombre y casi gobernó una ciudad entera él solo."
  },
  {
    rank: 16, name: "Bill Gates", flag: "US", country: "Estados Unidos",
    worth: 108, source: "Microsoft",
    quip: "Dejó Harvard para fundar Microsoft. Tu profesor de informática sigue sin superarlo."
  },
  {
    rank: 17, name: "Françoise Bettencourt Meyers y familia", flag: "FR", country: "Francia",
    worth: 100, source: "L'Oréal",
    quip: "La heredera de L'Oréal. Porque ella lo vale... literalmente, unos 100.000 millones de dólares."
  },
  {
    rank: 18, name: "Mukesh Ambani", flag: "IN", country: "India",
    worth: 99.7, source: "Reliance Industries",
    quip: "Vive en una casa de 27 pisos con cine, gimnasio y helipuerto propios. Tiene mejor WiFi que tu oficina."
  },
  {
    rank: 19, name: "Zhang Yiming", flag: "CN", country: "China",
    worth: 69.3, source: "ByteDance / TikTok",
    quip: "El creador de TikTok. Le debes horas de tu vida... y él a ti, unos cuantos miles de millones."
  },
  {
    rank: 20, name: "Zhong Shanshan", flag: "CN", country: "China",
    worth: 68.1, source: "Nongfu Spring (agua embotellada)",
    quip: "Se hizo multimillonario vendiendo agua embotellada. Literalmente convirtió el agua en oro."
  }
];
