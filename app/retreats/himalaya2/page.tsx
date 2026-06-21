'use client';

import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useState, useEffect, useRef, ReactNode } from 'react';

function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.12 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const TELEGRAM_VLAD = 'https://t.me/Vlady_108';
const TELEGRAM_DASHA = 'https://t.me/dawa_wonder';

const temples = [
  {
    name: 'Кедарнатх',
    energy: 'Основание. Земля. Родовая карма.',
    height: 'около 3580 м',
    chakra: 'Муладхара, стихия Земли, устойчивость',
    text: 'Самый известный из пяти Кедаров и одна из главных точек Шивы в Гималаях. Здесь маршрут открывается как внутреннее решение идти глубже.',
  },
  {
    name: 'Мадхьямахешвар',
    energy: 'Внутренний огонь. Тапас. Трансформация.',
    height: 'около 3490 м',
    chakra: 'Манипура, огонь, личная сила',
    text: 'Место, где путь начинает работать через тело, усилие и очищение контроля. Здесь энергия борьбы может переходить в ясность и спокойную силу.',
  },
  {
    name: 'Тунгнатх',
    energy: 'Сердце. Служение. Карма-йога.',
    height: 'около 3680 м',
    chakra: 'Анахата, служение, действие из сердца',
    text: 'Самый высокий действующий храм Шивы в мире. Этап действия без ожиданий, раскрытия сердца и движения из преданности.',
  },
  {
    name: 'Рудранатх',
    energy: 'Истина. Молчание. Лицо Рудры.',
    height: 'около 3600 м',
    chakra: 'Вишуддха, истина, внутреннее молчание',
    text: 'Самый мистический этап Панча Кедара. Он требует честности с собой, тишины и готовности слушать не умом, а всем существом.',
  },
  {
    name: 'Кальпешвар',
    energy: 'Интуиция. Видение. Высшее руководство.',
    height: 'около 2200 м',
    chakra: 'Аджна, интуиция, внутреннее видение',
    text: 'Финальная точка маршрута, где пять этапов собираются в одно переживание: основание, огонь, сердце, истина и видение.',
  },
];

const route = [
  { date: '13 сентября', title: 'Прибытие в Индию', text: 'Встреча группы в аэропорту Дели, размещение, отдых после перелета, знакомство, организационный брифинг и мягкая настройка на ятру.' },
  { date: '14 сентября', title: 'Переезд в сторону Гималаев', text: 'Выезд из Дели, адаптация к маршруту и вечерняя настройка на паломнический формат путешествия.' },
  { date: '15-16 сентября', title: 'Кедарнатх', text: 'Подъем к Кедарнатху, даршан, практика в месте силы и открытие маршрута как точки опоры.' },
  { date: '17-18 сентября', title: 'Мадхьямахешвар', text: 'Переезд и пеший маршрут к храму, практики на внутренний огонь, очищение силы и наблюдение за напряжением.' },
  { date: '19-20 сентября', title: 'Тунгнатх и Чандрашила', text: 'Переход к самому высокому действующему храму Шивы. При возможности - подъем на Чандрашилу и практика сердца.' },
  { date: '21-22 сентября', title: 'Рудранатх', text: 'Самый мистический этап: горный переход, храм, практика тишины и две ночевки в палатках во время трека.' },
  { date: '23 сентября', title: 'Кальпешвар', text: 'Посещение пещерного храма, практика на интуицию, внутреннее видение и завершение пяти Кедаров.' },
  { date: '24 сентября', title: 'Интеграция', text: 'Отдых после маршрута, общая практика, сатсанг и подведение итогов прожитого пути.' },
  { date: '25 сентября', title: 'Завершение тура', text: 'Возвращение в Дели, трансфер в аэропорт, прощание с группой и возвращение с новым внутренним состоянием.' },
];

const experienceItems = [
  'почувствовать более глубокую связь с Шивой',
  'пройти очищение через путь, горы и практику',
  'выйти из привычного контроля и внутреннего напряжения',
  'укрепить состояние опоры и доверия',
  'глубже почувствовать тело, дыхание и энергию',
  'соприкоснуться с тишиной, редко доступной в обычной жизни',
  'пройти маршрут как личную садхану',
  'получить опыт, который остается внутри после возвращения',
];

const formatItems = [
  { title: 'Паломничество к пяти храмам', text: 'Вы посетите все пять храмов Панча Кедара - один из самых глубоких маршрутов для тех, кто идет путем Шивы.' },
  { title: 'Пеший путь через Гималаи', text: 'Маршрут проходит через тропы, высоту, горную тишину и природную мощь Гималаев.' },
  { title: 'Йогическая садхана', text: 'Практики помогают настроить тело, дыхание и внимание на более глубокое проживание маршрута.' },
  { title: 'Пранаяма и медитации', text: 'В горах дыхание ощущается иначе, а практика становится внимательнее, глубже и тише.' },
  { title: 'Семинары и сатсанги', text: 'Беседы о практике, энергии, Шиве, Кундалини, трансформации и применении духовного опыта в жизни.' },
  { title: 'Время для тишины', text: 'В программе будет пространство для личной практики, молчания, наблюдения и интеграции.' },
];

const forWhom = [
  'вы идете путем йоги, Шивы, Кундалини или Тантры',
  'вы уже получили Шактипат или практикуете внутреннюю садхану',
  'вы чувствуете зов Гималаев как пространства силы и тишины',
  'вы хотите выйти из привычного ритма и услышать себя',
  'вы ищете внутреннюю опору через реальный путь, тело и дыхание',
  'вы готовы к паломничеству, а не к туристической поездке',
];

const challengingFor = [
  'вы хотите легкий туристический отдых без физической нагрузки',
  'вы не готовы к пешим переходам и горному маршруту',
  'вы ожидаете формат отеля, экскурсий и свободного шопинга',
  'вы не готовы к двум ночевкам в палатках во время трека',
  'вы не чувствуете внутреннего отклика к Шиве, Гималаям и духовной практике',
];

const included = [
  'встреча в аэропорту Дели',
  'трансферы в начале, конце и на протяжении маршрута',
  'проживание в домашних коттеджах и гостевых домах',
  'размещение в уютных номерах на двух человек',
  'двухразовое полноценное вегетарианское питание',
  'практики йоги, пранаямы и медитации',
  'семинары, сатсанги и беседы с Владиславом и Дарьей',
  'сопровождение и организация маршрута',
  'помощь с подготовкой к поездке',
];

const notIncluded = [
  'международный авиаперелет до Дели и обратно',
  'индийская виза',
  'медицинская страховка',
  'личные расходы',
  'одноместное размещение, если оно требуется',
];

const logistics = [
  { label: 'Даты', value: '13-25 сентября' },
  { label: 'Длительность', value: '13 дней' },
  { label: 'Страна', value: 'Индия' },
  { label: 'Регион', value: 'Гималаи' },
  { label: 'Маршрут', value: 'Панча Кедар' },
  { label: 'Формат', value: 'паломнический тур / йогическая ятра' },
  { label: 'Ведущие', value: 'Владислав Чангелия и Дарья Смирнова' },
  { label: 'Язык', value: 'русский' },
  { label: 'Группа', value: '12-14 человек' },
  { label: 'Место встречи', value: 'аэропорт Дели' },
  { label: 'Проживание', value: 'коттеджи, гостевые дома и две ночевки в палатках' },
  { label: 'Питание', value: 'двухразовое вегетарианское питание' },
];

const faqs = [
  {
    q: 'Что нужно купить самостоятельно?',
    a: 'Самостоятельно нужно приобрести международный авиабилет до Дели и обратно, а также оформить индийскую визу и медицинскую страховку.',
  },
  {
    q: 'Где начинается тур?',
    a: 'Тур начинается в Дели. Мы встречаем участников в аэропорту и организуем трансфер по маршруту. В конце путешествия также будет трансфер обратно в аэропорт.',
  },
  {
    q: 'Нужен ли опыт в йоге?',
    a: 'Глубокий опыт не обязателен, но важны внутренний интерес к практике, уважение к традиции и готовность к маршруту.',
  },
  {
    q: 'Нужен ли Шактипат, чтобы поехать?',
    a: 'Нет, это не обязательное условие. Но для тех, кто уже получил Шактипат или идет путем внутренней садханы, маршрут может раскрыться особенно глубоко.',
  },
  {
    q: 'Какая физическая подготовка нужна?',
    a: 'Нужна базовая физическая готовность к пешим переходам и горному маршруту. Это не спортивная экспедиция, но и не легкий экскурсионный тур.',
  },
  {
    q: 'Где мы будем жить?',
    a: 'На протяжении тура предусмотрены домашние коттеджи и гостевые дома. Во время горного трека будут две ночевки в палатках.',
  },
  {
    q: 'Какое будет питание?',
    a: 'Двухразовое полноценное вегетарианское питание. Для группы будут готовить местные хозяева домов.',
  },
  {
    q: 'Что делать, если я сомневаюсь, подойдет ли мне тур?',
    a: 'Напишите нам. Мы лично обсудим маршрут, нагрузку, условия проживания и поможем понять, подходит ли вам Панча Кедар.',
  },
];

function RetreatImage({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className = '',
  priority = false,
  objectPosition = 'center',
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <div className={`${aspect} relative overflow-hidden bg-[#dfd8cd] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}

function BookBtn({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-8 py-4 bg-[#3a3a35] text-white hover:bg-[#b99a5f] hover:text-white transition-all duration-300 font-light tracking-wider text-sm ${className}`}
    >
      Забронировать место
    </button>
  );
}

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-sm leading-relaxed font-light ${light ? 'text-white/78' : 'text-[#3a3a35]/78'}`}>
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 ${light ? 'bg-[#d6b678]' : 'bg-[#9f7d43]'}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`text-[10px] uppercase tracking-widest font-mono block mb-6 ${light ? 'text-[#d6b678]' : 'text-[#9f7d43]'}`}>
      {children}
    </span>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [channels, setChannels] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error' | 'no-channel'>('idle');

  const toggleChannel = (ch: string) =>
    setChannels((prev) => {
      const next = prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch];
      if (status === 'no-channel' && next.length > 0) setStatus('idle');
      return next;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (channels.length === 0) {
      setStatus('no-channel');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          channels,
          retreat: 'Панча Кедар · 13-25 сентября',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('API error:', data.error);
        setStatus('error');
        return;
      }
      if (typeof fbq !== 'undefined') fbq('track', 'Lead');
      setStatus('done');
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white w-full max-w-md p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeUp 0.35s ease' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#3a3a35]/40 hover:text-[#3a3a35] transition-colors text-2xl leading-none">x</button>

        {status === 'done' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-light text-[#3a3a35] mb-2">Заявка отправлена</h3>
            <p className="text-sm text-[#3a3a35]/60 font-light">Свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <span className="text-[10px] uppercase tracking-widest text-[#9f7d43] font-mono block mb-4">Панча Кедар · 13-25 сентября</span>
            <h3 className="text-xl font-light text-[#3a3a35] mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-1">Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full border border-[#e8e6e0] px-4 py-3 text-sm font-light text-[#3a3a35] focus:outline-none focus:border-[#b99a5f] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-1">Телефон / Telegram / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+380 / +49 / +43..."
                  className="w-full border border-[#e8e6e0] px-4 py-3 text-sm font-light text-[#3a3a35] focus:outline-none focus:border-[#b99a5f] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-3">
                  Как связаться <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 flex-wrap">
                  {['WhatsApp', 'Telegram', 'Телефон'].map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => toggleChannel(ch)}
                      className={`px-4 py-2 text-xs border transition-all ${
                        channels.includes(ch)
                          ? 'bg-[#3a3a35] text-white border-[#3a3a35]'
                          : status === 'no-channel'
                            ? 'border-red-400 text-[#3a3a35]/60 hover:border-[#b99a5f]'
                            : 'border-[#e8e6e0] text-[#3a3a35]/60 hover:border-[#b99a5f]'
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
                {status === 'no-channel' && (
                  <p className="text-red-500 text-xs mt-2 font-light">Выберите хотя бы один способ связи</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-[#3a3a35] text-white text-sm font-light tracking-wider hover:bg-[#b99a5f] transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center">Ошибка отправки. Напишите напрямую в Telegram.</p>
              )}
            </form>
          </>
        )}
      </div>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

export default function HimalayaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      <Header />
      <main className="bg-[#eeeae2]">
        <section className="relative pt-20 bg-[#2f302b]">
          <div className="relative h-[calc(100svh-128px)] min-h-[520px] max-h-[760px] overflow-hidden">
            <RetreatImage
              src="/images/himalaya2/IMG_0282.jpg"
              alt="Храм Шивы в Гималаях"
              aspect="h-full w-full"
              className="absolute inset-0"
              priority
              objectPosition="center 42%"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f302b] via-[#2f302b]/74 to-[#2f302b]/18" />
            <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 lg:px-16 pb-10 sm:pb-14">
              <div className="max-w-4xl">
                <span className="text-[10px] uppercase tracking-widest text-[#d6b678] font-mono block mb-5">
                  Йогическая ятра по пяти храмам Шивы
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-none mb-6">
                  Панча Кедар
                </h1>
                <p className="text-base sm:text-xl font-light text-white/78 leading-relaxed max-w-2xl mb-8">
                  Паломнический маршрут по пяти древним храмам Шивы в Гималаях для тех, кто идет путем внутренней практики, Кундалини, Тантры и глубокой трансформации.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <BookBtn onClick={() => setShowModal(true)} className="bg-[#d6b678] text-[#2f302b] hover:bg-white hover:text-[#2f302b]" />
                  <span className="text-white/58 text-xs font-mono">Группа 12-14 человек · стоимость от 2800 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mx-4 sm:mx-8 lg:mx-16 -mt-6 relative z-10 shadow-xl grid grid-cols-2 sm:grid-cols-5">
            {[
              { label: 'Даты', val: '13-25 сентября' },
              { label: 'Длительность', val: '13 дней' },
              { label: 'Формат', val: 'йогическая ятра' },
              { label: 'Группа', val: '12-14 человек' },
              { label: 'Стоимость', val: 'от 2800 €' },
            ].map((item) => (
              <div key={item.label} className="p-5 sm:p-6 border-r border-b border-[#eeeae2] last:border-r-0">
                <div className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono mb-1">{item.label}</div>
                <div className="text-sm sm:text-base font-medium text-[#3a3a35] leading-tight">{item.val}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <FadeUp>
              <SectionLabel>Пять храмов и внутренняя трансформация</SectionLabel>
              <h2 className="text-3xl sm:text-5xl font-light text-[#3a3a35] leading-tight mb-8">
                Маршрут, где человек не просто приходит к Шиве, а проходит путь внутрь себя
              </h2>
              <div className="border-l-4 border-[#b99a5f] pl-6 sm:pl-8 mb-8">
                <p className="text-lg sm:text-xl font-light text-[#3a3a35] leading-relaxed italic">
                  Панча Кедар называют живым маршрутом восхождения энергии: от основания и родовой кармы к внутреннему огню, сердцу, истине и видению.
                </p>
              </div>
              <p className="text-base font-light text-[#3a3a35]/75 leading-relaxed">
                Это путь через горы, храмы, тишину, практику и внутреннее очищение. Каждый день раскрывает новый слой через тело, дыхание, усталость, молитву и присутствие.
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <RetreatImage
                src="/images/himalaya2/IMG_0389.jpg"
                alt="Практика йоги в Гималаях"
                aspect="aspect-[4/5]"
                objectPosition="center"
              />
            </FadeUp>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Пять Кедаров</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Пять этапов одного внутреннего пути</h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {temples.map((temple, index) => (
                <FadeUp key={temple.name} delay={index * 80}>
                  <article className="border border-[#eeeae2] bg-[#fbfaf7] p-5 h-full">
                    <div className="text-2xl font-light text-[#b99a5f]/55 font-mono mb-5">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-lg font-light text-[#3a3a35] mb-2">{temple.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-[#9f7d43] font-mono mb-4 leading-relaxed">{temple.energy}</p>
                    <div className="space-y-2 mb-4 text-xs text-[#3a3a35]/58 font-light leading-relaxed">
                      <p><span className="text-[#3a3a35]">Высота:</span> {temple.height}</p>
                      <p><span className="text-[#3a3a35]">Связь:</span> {temple.chakra}</p>
                    </div>
                    <p className="text-sm font-light text-[#3a3a35]/72 leading-relaxed">{temple.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#30322d] py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <FadeUp>
              <SectionLabel light>Для кого</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-8">Этот маршрут для вас, если вы чувствуете внутренний зов</h2>
              <BulletList items={forWhom} light />
            </FadeUp>
            <FadeUp delay={160}>
              <SectionLabel light>Что может дать этот опыт</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-8">Не одинаковый результат для всех, а пространство для настоящего процесса</h2>
              <BulletList items={experienceItems} light />
            </FadeUp>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Программа тура</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-5">13 дней йогической ятры в Гималаях</h2>
              <p className="text-base font-light text-[#3a3a35]/72 leading-relaxed max-w-3xl mb-10">
                С 13 по 25 сентября мы отправляемся пройти пять священных храмов Шивы. Программа включает практики, даршан, пешие переходы, сатсанги, время для тишины и бережное прохождение маршрута в группе единомышленников.
              </p>
            </FadeUp>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {route.map((day, index) => (
                <FadeUp key={`${day.date}-${day.title}`} delay={index * 45}>
                  <article className="bg-white border border-[#e4ded2] p-5 h-full">
                    <div className="text-[10px] uppercase tracking-widest text-[#9f7d43] font-mono mb-3">{day.date}</div>
                    <h3 className="text-lg font-light text-[#3a3a35] mb-3">{day.title}</h3>
                    <p className="text-sm font-light text-[#3a3a35]/72 leading-relaxed">{day.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Что будет в туре</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Практика, путь и живое пространство Гималаев</h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {formatItems.map((item, index) => (
                <FadeUp key={item.title} delay={index * 70}>
                  <article className="border border-[#eeeae2] p-6 h-full">
                    <div className="text-xs uppercase tracking-widest text-[#b99a5f] font-mono mb-4">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-lg font-light text-[#3a3a35] mb-3">{item.title}</h3>
                    <p className="text-sm font-light text-[#3a3a35]/72 leading-relaxed">{item.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <FadeUp>
              <SectionLabel>Проживание и питание</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-8">Комфорт там, где он поддерживает путь</h2>
              <div className="bg-white border border-[#e4ded2] p-6 sm:p-8">
                <p className="text-base font-light text-[#3a3a35]/76 leading-relaxed mb-6">
                  На протяжении тура мы будем жить в комфортных условиях: в уютных домашних коттеджах и гостевых домах среди Гималаев. Размещение предусмотрено в номерах на двух человек.
                </p>
                <p className="text-base font-light text-[#3a3a35]/76 leading-relaxed">
                  Питание двухразовое, полноценное, вегетарианское. Во время горного трека предусмотрены две ночевки в палатках - это важная часть опыта близости к природе, горам и тишине.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={140}>
              <SectionLabel>Кому может быть сложно</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-8">Панча Кедар требует включенности и уважения к маршруту</h2>
              <div className="bg-[#30322d] p-6 sm:p-8">
                <BulletList items={challengingFor} light />
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Ведущие тура</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Владислав Чангелия и Дарья Смирнова</h2>
            </FadeUp>
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
              <FadeUp delay={100}>
                <RetreatImage
                  src="/images/himalaya2/IMG_0434.JPG"
                  alt="Владислав Чангелия в Гималаях"
                  aspect="aspect-[4/5]"
                  objectPosition="center 42%"
                />
              </FadeUp>
              <div className="grid md:grid-cols-2 gap-4">
                <FadeUp delay={180}>
                  <article className="border border-[#eeeae2] p-6 h-full">
                    <h3 className="text-xl font-light text-[#3a3a35] mb-2">Владислав Чангелия</h3>
                    <span className="text-[10px] uppercase tracking-widest text-[#9f7d43] font-mono block mb-5">Инструктор йоги, проводник, практик</span>
                    <p className="text-sm font-light text-[#3a3a35]/76 leading-relaxed mb-5">
                      22 года в профессиональном футболе и 19 лет практики йоги научили Влада совмещать материальные обязанности и духовный путь.
                    </p>
                    <BulletList items={[
                      '19 лет практики йоги',
                      '1000+ часов TTC',
                      'два посвящения в традиции бхакти-йоги',
                      'высшее тантрическое посвящение, Шактипат Парампара',
                      'автор книги «Футболист, который пытался стать монахом»',
                    ]} />
                    <a href={TELEGRAM_VLAD} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 text-sm text-[#9f7d43] hover:text-[#3a3a35] transition-colors">
                      Написать Владу
                    </a>
                  </article>
                </FadeUp>
                <FadeUp delay={240}>
                  <article className="border border-[#eeeae2] p-6 h-full">
                    <h3 className="text-xl font-light text-[#3a3a35] mb-2">Дарья Смирнова</h3>
                    <span className="text-[10px] uppercase tracking-widest text-[#9f7d43] font-mono block mb-5">Основательница Сандхи-Хилинг</span>
                    <p className="text-sm font-light text-[#3a3a35]/76 leading-relaxed mb-5">
                      Дарья находится в духовной практике более 25 лет. Индия занимает особое место в ее жизни: самые глубокие реализации происходили именно там.
                    </p>
                    <BulletList items={[
                      '25+ лет в духовной практике',
                      'многократные поездки в Индию',
                      'основательница школы Сандхи-Хилинг',
                      '1000+ учеников',
                      'опыт сопровождения людей в трансформационных процессах',
                    ]} />
                    <a href={TELEGRAM_DASHA} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 text-sm text-[#9f7d43] hover:text-[#3a3a35] transition-colors">
                      Написать Дарье
                    </a>
                  </article>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <FadeUp>
              <SectionLabel>Атмосфера прошлых поездок</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-8">Не туристическая Индия, а живой опыт практики и мест силы</h2>
              <p className="text-base font-light text-[#3a3a35]/76 leading-relaxed mb-6">
                В таких путешествиях важны не только маршрут и красивые места. Важны люди, пространство, внимание к состоянию группы и глубокое понимание того, зачем мы туда едем.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'для кого-то это очищение',
                  'для кого-то возвращение к себе',
                  'для кого-то начало нового этапа практики',
                  'для кого-то встреча с тем, что давно было внутри',
                ].map((item) => (
                  <div key={item} className="bg-white border border-[#e4ded2] p-5 text-sm font-light text-[#3a3a35]/76 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <RetreatImage
                src="/images/himalaya2/IMG_0430.JPG"
                alt="Палаточный лагерь в Гималаях"
                aspect="aspect-[5/4]"
                objectPosition="center"
              />
            </FadeUp>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Отзывы участников</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Что люди увозят с собой</h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Я ехала за ответами', text: 'А получила состояние внутренней тишины. Маршрут работал со мной изнутри через практики, разговоры, тишину и горы.' },
                { title: 'Это был настоящий путь', text: 'Каждый день был как отдельная практика. Очень ценно, что Влад и Дарья действительно ведут группу.' },
                { title: 'Практика стала другой', text: 'Дыхание, тело, медитация и молитва стали глубже. Было ощущение, что сама земля помогает остановиться.' },
                { title: 'Меня бережно вели', text: 'В поездке было много заботы, внимания и внутренней глубины. Даже сложные моменты проходили правильно и бережно.' },
              ].map((review, index) => (
                <FadeUp key={review.title} delay={index * 80}>
                  <blockquote className="border border-[#eeeae2] p-6 h-full">
                    <h3 className="text-lg font-light text-[#3a3a35] mb-4">«{review.title}»</h3>
                    <p className="text-sm font-light text-[#3a3a35]/72 leading-relaxed">{review.text}</p>
                  </blockquote>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <SectionLabel>Детали и логистика</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Ваша задача - прилететь в Дели. Остальное мы организуем</h2>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {logistics.map((item) => (
                <div key={item.label} className="bg-white border border-[#e4ded2] p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono mb-2">{item.label}</div>
                  <div className="text-sm text-[#3a3a35] font-light leading-relaxed">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#30322d] py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <SectionLabel light>Стоимость и условия участия</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-10">Инвестиция в маршрут, который невозможно пройти случайно</h2>
            </FadeUp>
            <div className="bg-white p-6 sm:p-10">
              <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 mb-10">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#9f7d43] font-mono mb-3">Стоимость тура</div>
                  <div className="text-5xl sm:text-6xl font-light text-[#3a3a35] mb-3">2800 €</div>
                  <p className="text-sm text-[#3a3a35]/60 font-light mb-6">при бронировании до 10 июля</p>
                  <div className="text-2xl font-light text-[#3a3a35]">3100 €</div>
                  <p className="text-sm text-[#3a3a35]/60 font-light">после 11 июля</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#9f7d43] font-mono mb-4">Что входит</div>
                    <BulletList items={included} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#3a3a35]/40 font-mono mb-4">Не входит</div>
                    <BulletList items={notIncluded} />
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-[#eeeae2] flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <p className="text-sm font-light text-[#3a3a35]/68 leading-relaxed max-w-xl">
                  Количество участников ограничено: группа от 12 до 14 человек, чтобы сохранить комфорт, внимание и атмосферу настоящего совместного пути.
                </p>
                <BookBtn onClick={() => setShowModal(true)} className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Частые вопросы</SectionLabel>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Перед тем как принять решение</h2>
            <div className="divide-y divide-[#eeeae2]">
              {faqs.map((item, index) => (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#3a3a35] group-hover:text-[#9f7d43] transition-colors pr-4">
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#9f7d43] shrink-0 transition-transform ${openFaq === index ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                  {openFaq === index && (
                    <p className="pb-5 text-sm font-light text-[#3a3a35]/70 leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2f302b] py-20 sm:py-28 px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel light>Оставьте заявку на участие</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-6 leading-tight">
              Такая возможность приходит нечасто
            </h2>
            <p className="text-base sm:text-lg font-light text-white/70 mb-10 leading-relaxed">
              Панча Кедар невозможно пройти случайно. Если внутри уже есть зов, напишите нам, чтобы узнать детали маршрута, условия участия и наличие мест.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center px-10 py-5 bg-[#d6b678] text-[#2f302b] hover:bg-white transition-all duration-300 font-medium tracking-wider text-sm"
            >
              Забронировать место
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
