const mongoose = require('mongoose');

// Try both URIs
const uris = [
  'mongodb+srv://vlady108_db_user:vlqUxtdEo1dOy3JM@cluster0.18e8cjm.mongodb.net/?appName=Cluster0',
  'mongodb+srv://artemruben95_db_user:1111@cluster0.c5avoit.mongodb.net/?appName=Cluster0'
];

const himalayaRetreat = {
  title: {
    ru: "Йога Ретрит в Гималаях",
    en: "Yoga Retreat in the Himalayas"
  },
  subtitle: {
    ru: "Гималаи | Индия",
    en: "Himalayas | India"
  },
  dates: "Даты уточняются / Dates TBA",
  duration: "14 дней / 14 days",
  location: {
    ru: "Гималаи, Индия (река Аллакананда)",
    en: "Himalayas, India (Alaknanda River)"
  },
  price: "По запросу / On request",
  pricingTiers: [
    {
      deadline: "Early Bird — первые 10 дней / Early Bird — first 10 days",
      price: "Специальные условия / Special conditions"
    }
  ],
  description: {
    ru: "Я приглашаю вас в невероятное место и, без преувеличений, на удивительный ретрит в Гималаях. Такого я ещё не проводил.\n\nМы будем находиться вдали от городской суеты — место будет только для нас, прямо на берегу священной реки Аллакананды.\n\nУровень подготовки — любой. Йога никого не ущемляет и принимает всех.\n\nБез громких фраз: лучше один раз поехать и увидеть всё лично, чем много об этом слушать. Некоторый опыт невозможно «засунуть» в слова.",
    en: "I invite you to an incredible place and, without exaggeration, to an amazing retreat in the Himalayas. I have never done anything like this before.\n\nWe will be far from the city hustle — the place will be exclusively ours, right on the banks of the sacred Alaknanda River.\n\nAny level of preparation is welcome. Yoga does not discriminate and accepts everyone.\n\nNo bold claims: it is better to go once and see everything in person than to hear a lot about it. Some experiences cannot be put into words."
  },
  highlights: {
    ru: [
      "Ежедневные практики 2 раза в день на берегу священной реки Аллакананды",
      "Питание 2–3 раза в день — чистая органическая пища",
      "Вечерние сатсанги на избранные темы",
      "Ежедневное омовение в священной реке Аллакананда",
      "Дыхательные техники с гималайским воздухом",
      "Основы медитации и созерцания",
      "Прана-вьяямы, дыхательные техники и крийи из традиции",
      "Основы и практические элементы аюрведы",
      "Прикосновение к духовным трактатам",
      "Рафтинг на каяках по Аллакананде — один из лучших в Индии",
      "Хайкинги по гималайской природе"
    ],
    en: [
      "Daily practices twice a day on the banks of the sacred Alaknanda River",
      "Meals 2-3 times a day — pure organic food",
      "Evening satsangs on selected topics",
      "Daily bathing in the sacred Alaknanda River",
      "Breathing techniques with Himalayan air",
      "Fundamentals of meditation and contemplation",
      "Prana-vyayamas, breathing techniques and kriyas from tradition",
      "Fundamentals and practical elements of Ayurveda",
      "Journey into spiritual texts",
      "Kayak rafting on the Alaknanda — one of the best in India",
      "Hiking through Himalayan nature"
    ]
  },
  included: {
    ru: [
      "Ежедневные практики йоги (2 раза в день)",
      "Питание 2–3 раза в день (чистая органическая пища)",
      "Вечерние сатсанги",
      "Посещение мест силы: Kartik Swami Temple (хайк), Koteshwar Mahadev Temple, Dhari Devi Temple, Tungnath Temple (5000 лет)",
      "Рафтинг на каяках по реке Аллакананда",
      "Хайкинги по гималайской природе",
      "Гид в программе",
      "Сопровождение 24/7 на протяжении всей поездки"
    ],
    en: [
      "Daily yoga practices (twice a day)",
      "Meals 2-3 times a day (pure organic food)",
      "Evening satsangs",
      "Visits to power places: Kartik Swami Temple (hike), Koteshwar Mahadev Temple, Dhari Devi Temple, Tungnath Temple (5000 years old)",
      "Kayak rafting on the Alaknanda River",
      "Hiking through Himalayan nature",
      "Guide included in the program",
      "24/7 accompaniment throughout the trip"
    ]
  },
  notIncluded: {
    ru: [
      "Авиабилеты",
      "Виза в Индию",
      "Личные расходы"
    ],
    en: [
      "Flight tickets",
      "Indian visa",
      "Personal expenses"
    ]
  },
  imageUrl: "https://res.cloudinary.com/dnzecl9xw/image/upload/v1773141255/yoga/retreats/himalaya-retreat.jpg",
  maxParticipants: 12,
  isActive: true,
  order: 1
};

async function run() {
  let connected = false;
  let conn;

  for (const uri of uris) {
    try {
      console.log('Trying:', uri.split('@')[1].split('/')[0]);
      conn = await mongoose.createConnection(uri, { serverSelectionTimeoutMS: 8000 });
      await conn.asPromise();
      console.log('Connected!');
      connected = true;
      break;
    } catch (e) {
      console.log('Failed:', e.message.substring(0, 80));
    }
  }

  if (!connected || !conn) {
    console.error('Cannot connect to any database');
    process.exit(1);
  }

  const db = conn.db;

  // 1. Delete Panchakarma retreat
  const deleteResult = await db.collection('retreats').deleteMany({
    'title.ru': 'Panchakarma Retreat в Южной Индии'
  });
  console.log('Deleted Panchakarma:', deleteResult.deletedCount, 'document(s)');

  // 2. Insert Himalaya retreat
  const insertResult = await db.collection('retreats').insertOne(himalayaRetreat);
  console.log('Inserted Himalaya retreat:', insertResult.insertedId);

  // 3. Show all retreats
  const all = await db.collection('retreats').find({}).toArray();
  console.log('\nAll retreats now:');
  all.forEach(r => console.log(' -', r.title.ru, '| active:', r.isActive, '| order:', r.order));

  await conn.close();
  process.exit(0);
}

run().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
