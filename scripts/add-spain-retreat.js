const mongoose = require('mongoose');

const uri = 'mongodb+srv://vlady108_db_user:vlqUxtdEo1dOy3JM@cluster0.18e8cjm.mongodb.net/?appName=Cluster0';

const spainRetreat = {
  title: {
    ru: "Йога Ретрит в Испании",
    en: "Yoga Retreat in Spain"
  },
  subtitle: {
    ru: "Коста Дорада | 25–27 Апреля 2026",
    en: "Costa Dorada | April 25–27, 2026"
  },
  dates: "25–27 апреля 2026 / April 25–27, 2026",
  duration: "4 ночи, 3 дня / 4 nights, 3 days",
  location: {
    ru: "Камбрилс, Коста Дорада, Испания",
    en: "Cambrils, Costa Dorada, Spain"
  },
  price: "По запросу / On request",
  pricingTiers: [],
  description: {
    ru: "Йога ретрит, аналогов которому сложно найти.\n\n4 ночи и 3 полных дня ретрита на побережье Испании Коста Дорада — ваша перезагрузка и перерождение в уникальном райском уголке Средиземноморья.\n\nВ тихом атмосферном месте на побережье, с комфортным тихим пляжем, лазурным морем, в г. Камбрилс с прекрасной туристической инфраструктурой. Ближайшие аэропорты — Реус, Барселона.\n\nЭто будет глубинная трансформация на всех уровнях. Благодаря древним аутентичным практикам йоги, Божественная энергия действует таким образом, что у людей решаются вопросы разного характера: от поиска смысла жизни и предназначения до решения повседневных задач.\n\nНа этом ретрите вы получите что-то очень настоящее. И всё это вместе наполнит вас на 108%.",
    en: "A yoga retreat unlike anything you've experienced before.\n\n4 nights and 3 full days of retreat on the coast of Spain's Costa Dorada — your reset and rebirth in a unique Mediterranean paradise.\n\nIn a quiet, atmospheric place on the coast, with a comfortable peaceful beach, azure sea, in the town of Cambrils with excellent tourist infrastructure. Nearest airports — Reus, Barcelona.\n\nThis will be a deep transformation on all levels. Through ancient authentic yoga practices, divine energy works in such a way that people find answers to questions of all kinds: from the search for life's meaning and purpose to solving everyday challenges.\n\nAt this retreat, you will receive something truly real. And all of this together will fill you to 108%."
  },
  highlights: {
    ru: [
      "6 практик йоги за 3 дня",
      "3 тематических семинара (темы обсуждаются под ваш запрос)",
      "Мощнейшие мантры-медитации",
      "Медитации на гвоздях",
      "Звукотерапия",
      "Практика на побережье Средиземного моря",
      "Глубинная трансформация на всех уровнях"
    ],
    en: [
      "6 yoga practices over 3 days",
      "3 thematic seminars (topics tailored to your requests)",
      "Powerful mantra meditations",
      "Nail bed meditations",
      "Sound therapy",
      "Practice on the Mediterranean coast",
      "Deep transformation on all levels"
    ]
  },
  included: {
    ru: [
      "Проживание в отеле 4 звезды (5 дней, 4 ночи) прямо у побережья",
      "Один из лучших пляжей Средиземноморья в 50 метрах от отеля",
      "3 дня ретрита в небольшой группе",
      "6 практик йоги",
      "3 семинара",
      "Мантры-медитации, медитации на гвоздях, звукотерапия",
      "Наполнение семинаров обсуждается под ваш запрос и пожелания"
    ],
    en: [
      "4-star hotel accommodation (5 days, 4 nights) right on the coast",
      "One of the best Mediterranean beaches 50 meters from the hotel",
      "3 days of retreat in a small group",
      "6 yoga practices",
      "3 seminars",
      "Mantra meditations, nail bed meditations, sound therapy",
      "Seminar content discussed and tailored to your requests"
    ]
  },
  notIncluded: {
    ru: [
      "Авиабилеты до Реуса/Барселоны и обратно",
      "Личные расходы"
    ],
    en: [
      "Flight tickets to/from Reus/Barcelona",
      "Personal expenses"
    ]
  },
  imageUrl: "https://res.cloudinary.com/dnzecl9xw/image/upload/v1773145106/yoga/retreats/spain-retreat.jpg",
  maxParticipants: 12,
  isActive: true,
  order: 2
};

async function run() {
  const conn = await mongoose.createConnection(uri, { serverSelectionTimeoutMS: 10000 });
  await conn.asPromise();
  console.log('Connected to DB');

  // Delete New Vraja Dhama retreat
  const del = await conn.db.collection('retreats').deleteMany({
    'title.ru': 'Йога-Ретрит в New Vraja Dhama'
  });
  console.log('Deleted New Vraja Dhama:', del.deletedCount, 'document(s)');

  // Insert Spain retreat
  const ins = await conn.db.collection('retreats').insertOne(spainRetreat);
  console.log('Inserted Spain retreat:', ins.insertedId);

  // Show all
  const all = await conn.db.collection('retreats').find({}).toArray();
  console.log('\nAll retreats now:');
  all.forEach(r => console.log(' -', r.title.ru, '| order:', r.order));

  await conn.close();
  process.exit(0);
}

run().catch(e => { console.error(e.message); process.exit(1); });
