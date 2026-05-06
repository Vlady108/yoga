'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useState, useEffect, useRef, ReactNode } from 'react';

function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
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

function PhImg({ label, aspect = 'aspect-[4/3]', className = '' }: { label: string; aspect?: string; className?: string }) {
  return (
    <div className={`${aspect} ${className} bg-[#e0dbd4] border-2 border-dashed border-[#b8b0a4] flex items-center justify-center`}>
      <span className="text-[#9a9088] text-xs font-mono text-center px-4">{label}</span>
    </div>
  );
}

function PhVideo({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`${className} bg-[#d8d3cc] border-2 border-dashed border-[#a8a098] flex items-center justify-center`}>
      <div className="text-center">
        <div className="text-3xl mb-2">▶</div>
        <span className="text-[#8a8078] text-xs font-mono">{label}</span>
      </div>
    </div>
  );
}

function BookBtn({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3a3a35] text-white hover:bg-[#c9b896] hover:text-[#3a3a35] transition-all duration-300 font-light tracking-wider text-sm ${className}`}
    >
      Забронировать место
    </button>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [channels, setChannels] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error' | 'no-channel'>('idle');

  const toggleChannel = (ch: string) =>
    setChannels(prev => {
      const next = prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch];
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
        body: JSON.stringify({ name, phone, channels }),
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
        onClick={e => e.stopPropagation()}
        style={{ animation: 'fadeUp 0.35s ease' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#3a3a35]/40 hover:text-[#3a3a35] transition-colors text-2xl leading-none">×</button>

        {status === 'done' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-light text-[#3a3a35] mb-2">Заявка отправлена</h3>
            <p className="text-sm text-[#3a3a35]/60 font-light">Свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-4">Ретрит в Гималаях · Июнь 2026</span>
            <h3 className="text-xl font-light text-[#3a3a35] mb-6">Забронировать место</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-1">Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full border border-[#e8e6e0] px-4 py-3 text-sm font-light text-[#3a3a35] focus:outline-none focus:border-[#c9b896] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-1">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+380 / +49 / +43..."
                  className="w-full border border-[#e8e6e0] px-4 py-3 text-sm font-light text-[#3a3a35] focus:outline-none focus:border-[#c9b896] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono block mb-3">
                  Как связаться <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 flex-wrap">
                  {['WhatsApp', 'Telegram', 'Телефон'].map(ch => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => toggleChannel(ch)}
                      className={`px-4 py-2 text-xs border transition-all ${
                        channels.includes(ch)
                          ? 'bg-[#3a3a35] text-white border-[#3a3a35]'
                          : status === 'no-channel'
                            ? 'border-red-400 text-[#3a3a35]/60 hover:border-[#c9b896]'
                            : 'border-[#e8e6e0] text-[#3a3a35]/60 hover:border-[#c9b896]'
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
                className="w-full py-4 bg-[#3a3a35] text-white text-sm font-light tracking-wider hover:bg-[#c9b896] hover:text-[#3a3a35] transition-all disabled:opacity-50"
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
      <main className="bg-[#e8e6e0]">

        {/* ══ ГЕРОЙ ══ */}
        <section className="relative pt-20">
          <div className="relative w-full aspect-[1015/571] lg:aspect-auto lg:h-[calc(100vh-80px)]">
            <Image
              src="/images/retrite/hero-yoga.jpg"
              alt="Йога-ретрит в Гималаях"
              fill
              quality={100}
              className="object-cover object-center"
              priority
            />
            {/* Градиент + CTA — только на sm+ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 hidden sm:flex flex-col justify-end pb-16 lg:pb-20 px-10 lg:px-16">
              <div className="flex flex-row items-center gap-4">
                <BookBtn onClick={() => setShowModal(true)} />
                <span className="text-white/70 text-xs font-mono">Группа до 12 человек · Осталось 6 мест</span>
              </div>
            </div>
          </div>

          {/* Meta bar */}
          <div className="bg-white mx-4 sm:mx-8 lg:mx-16 -mt-6 relative z-10 shadow-xl grid grid-cols-2 sm:grid-cols-4">
            {[
              { label: 'Даты', val: '1–15 июня 2026' },
              { label: 'Длительность', val: '15 дней' },
              { label: 'Группа', val: '12 человек' },
              { label: 'Стоимость', val: '2 800€' },
            ].map((item) => (
              <div key={item.label} className="p-5 sm:p-6 border-r border-b border-[#e8e6e0] last:border-r-0">
                <div className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono mb-1">{item.label}</div>
                <div className="text-sm sm:text-base font-medium text-[#3a3a35]">{item.val}</div>
              </div>
            ))}
          </div>

          {/* CTA под метабаром — только мобайл */}
          <div className="sm:hidden mx-4 mt-4 flex flex-col gap-3">
            <BookBtn onClick={() => setShowModal(true)} className="w-full justify-center" />
            <span className="text-[#3a3a35]/50 text-xs font-mono text-center">Группа до 12 человек · Осталось 6 мест</span>
          </div>
        </section>

        {/* ══ МЕСТО СИЛЫ ══ */}
        <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24 max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Место силы</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] leading-tight mb-8 max-w-2xl">
              Почему именно Гималаи
            </h2>
          </FadeUp>
          <FadeUp delay={150}>
          <div className="border-l-4 border-[#c9b896] pl-6 sm:pl-8 mb-10">
            <p className="text-lg sm:text-xl font-light text-[#3a3a35] leading-relaxed italic">
              Просто от пребывания посреди Гималайских вершин вы приобретаете тот опыт, который вы нигде больше не сможете получить. В Гималаях тысячи лет медитировали великие мудрецы и йоги, которые пришли к глубокой духовной реализации — и попадая в эти места — вы приобретаете внутреннюю силу, глубокое спокойствие и уверенность в своём пути.
            </p>
          </div>
          </FadeUp>
          <FadeUp delay={250}>
          <p className="text-base sm:text-lg font-light text-[#3a3a35]/80 leading-relaxed mb-12">
            Практические аспекты йоги и аюрведы для познания себя, оздоровление тела и ума, расширение сознания. Как результат — спокойный и удовлетворённый ум, который делает жизнь человека счастливой.
          </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c9b896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4 L28 26 H4 Z" />
                    <path d="M16 4 L22 16 H10 Z" fill="#c9b896" fillOpacity="0.15" />
                  </svg>
                ),
                title: 'Внутренняя сила',
                text: 'Устойчивость, которая остаётся после возвращения',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c9b896" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 16 Q8 10 12 16 Q16 22 20 16 Q24 10 28 16" />
                    <path d="M4 22 Q8 16 12 22 Q16 28 20 22 Q24 16 28 22" opacity="0.4" />
                  </svg>
                ),
                title: 'Работа с дыханием',
                text: 'Пранаяма и кундалини — на всю жизнь',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c9b896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="4" />
                    <path d="M16 4 C10 4 4 9 4 16" />
                    <path d="M16 28 C22 28 28 23 28 16" />
                    <path d="M4 16 C4 23 9 28 16 28" opacity="0.4" />
                    <path d="M28 16 C28 9 23 4 16 4" opacity="0.4" />
                  </svg>
                ),
                title: 'Спокойствие ума',
                text: 'Тишина, недостижимая в городе',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#c9b896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4 L18 13 L27 13 L20 19 L23 28 L16 22 L9 28 L12 19 L5 13 L14 13 Z" />
                  </svg>
                ),
                title: 'Духовный опыт',
                text: 'Активация в местах силы — точка невозврата',
              },
            ].map((b, i) => (
              <FadeUp key={b.title} delay={i * 100}>
                <div className="bg-white p-5 sm:p-6 border border-[#e8e6e0] h-full">
                  <div className="mb-4">{b.icon}</div>
                  <div className="text-sm font-medium text-[#3a3a35] mb-2">{b.title}</div>
                  <div className="text-xs text-[#3a3a35]/60 leading-relaxed">{b.text}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ══ ДЛЯ КОГО ══ */}
        <section className="bg-[#3a3a35] py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Для кого</span>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-10">Этот ретрит для вас, если вы хотите</h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '01', text: 'Оздоровить и укрепить тело и все системы организма' },
                { num: '02', text: 'Глубокую перезагрузку — вы чувствуете, что она необходима' },
                { num: '03', text: 'Сделать сильный прогресс в духовной жизни' },
                { num: '04', text: 'Научиться управлять своими состояниями и практикам саморегуляции' },
                { num: '05', text: 'Найти решение в сложной жизненной ситуации' },
                { num: '06', text: 'Раскрыть своё предназначение и понять, в каком направлении двигаться' },
              ].map((item, i) => (
                <FadeUp key={item.num} delay={i * 80}>
                  <div className="border border-white/10 p-6 hover:border-[#c9b896]/50 transition-colors h-full">
                    <div className="text-2xl font-light text-[#c9b896]/40 font-mono mb-4">{item.num}</div>
                    <p className="text-sm font-light text-white/80 leading-relaxed">{item.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ПРОГРАММА ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Программа</span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-4">15 дней трансформации в Гималаях</h2>
            </FadeUp>
            <FadeUp delay={150}>
            <p className="text-base font-light text-[#3a3a35]/70 leading-relaxed mb-10 max-w-2xl">
              Мы едем в места, в которые обычно непросто добраться западному человеку — в самые настоящие глубины Гималайских вершин. Практика пурна-йоги в древних местах силы в сочетании с активацией кундалини даёт результат, который невозможно получить по отдельности.
            </p>
            </FadeUp>

            {/* Маршрут */}
            <div className="mb-10">
              <div className="text-xs uppercase tracking-widest text-[#c9b896] font-mono mb-5">Маршрут</div>
              <div className="space-y-0">
                {[
                  { dates: '1–3 июня', place: 'Рудрапраяг', note: 'Прибытие, адаптация, первые практики' },
                  { dates: '4–11 июня', place: 'Агора', note: 'Базовый лагерь, ежедневные практики' },
                  { dates: '', place: 'Трек: Ганготри → Бходжваса', note: '15 км' },
                  { dates: '', place: 'Трек: Бходжваса → Гомукх → Тапован', note: '7,5 км · исток Ганги, 4500 м' },
                  { dates: '', place: 'Трек: Тапован → Чидваса', note: '11 км' },
                  { dates: '', place: 'Трек: Чидваса → Ганготри', note: '9,5 км · возвращение' },
                  { dates: '12–13 июня', place: 'Рудрапраяг', note: 'Отдых после трека, интеграция, практика' },
                  { dates: '14–15 июня', place: 'Выезд домой', note: 'Подведение итогов, прощание' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 border-l-2 ${item.dates ? 'border-[#c9b896]' : 'border-[#c9b896]/30'} ml-2 mb-1`}>
                    <div className="w-20 shrink-0 text-[10px] font-mono text-[#c9b896] uppercase leading-tight pt-0.5">{item.dates}</div>
                    <div>
                      <div className="text-sm font-medium text-[#3a3a35]">{item.place}</div>
                      <div className="text-xs text-[#3a3a35]/50 font-light mt-0.5">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Что входит в программу */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { num: '01', title: 'Пурна йога', text: 'Аутентичные практики из традиции кундалини и хатха-йоги. Асаны, дыхание, концентрация, бандхи, мудры, дришти — для подъёма энергии в высшие центры' },
                { num: '02', title: 'Пранаяма на высоте 4000 м', text: 'Практика последовательностей дыхания и задержек в местах силы — опыт, который невозможно получить в городе' },
                { num: '03', title: 'Пробуждение кундалини', text: 'Практика активации внутренней силы. Вы начнёте замечать работу и влияние энергий — и с этого момента начнётся ваш духовный путь' },
                { num: '04', title: 'Сатсанги', text: 'Чтение и обсуждение Хатха йога прадипика, Йога-сутры, Бхагавад Гита. Ответы на вопросы, разбор аспектов практики в жизни' },
                { num: '05', title: 'Посещение святых мест', text: 'Ашрамы, храмы, Гомукх — исток Ганги. Места, где тысячи лет медитировали великие мудрецы' },
                { num: '06', title: 'Рафтинг по Алакананде', text: 'Адреналин, живая природа и единение с горной рекой — включено в программу' },
              ].map((item, i) => (
                <FadeUp key={item.num} delay={i * 80}>
                  <div className="flex gap-5 p-5 sm:p-6 border border-[#e8e6e0] hover:border-[#c9b896] transition-colors h-full">
                    <div className="text-2xl font-light text-[#c9b896] font-mono shrink-0">{item.num}</div>
                    <div>
                      <div className="text-sm font-semibold text-[#3a3a35] mb-1">{item.title}</div>
                      <div className="text-sm font-light text-[#3a3a35]/70 leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="mt-4 relative w-full aspect-video overflow-hidden">
              <Image
                src="/images/retrite/pan.jpg"
                alt="Групповая практика в Гималаях"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ══ ВЕДУЩИЕ ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Ведущие</span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-4">Кто проведёт вас через этот опыт</h2>
              <p className="text-base font-light text-[#3a3a35]/70 mb-12 max-w-xl">
                Когда встречаются два практика с таким опытом — это редкость.              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* ВЛАД */}
              <FadeUp delay={100}>
              <div className="bg-white border border-[#e8e6e0] overflow-hidden h-full">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/about/IMG_6150.JPG"
                    alt="Владислав Чангелия"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-light text-[#3a3a35] mb-1">Владислав Чангелия</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-5">Bajrang Das · Йога-учитель</span>
                  <ul className="space-y-2 mb-6">
                    {[
                      '32 года в футболе, 22 — профессиональная карьера',
                      'КМС по футболу, чемпион четырёх стран',
                      '19 лет практики йоги, 1000+ часов TTC',
                      'Два посвящения в традиции бхакти-йоги',
                      'Высшее тантрическое посвящение, Шактипат Парампара',
                      'Годы изучения писаний у Гуру в Индии',
                      'Автор книги «Футболист, который пытался стать монахом»',
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-2 text-xs sm:text-sm text-[#3a3a35]/80 font-light">
                        <svg className="w-4 h-4 text-[#c9b896] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {li}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-2 border-[#c9b896] pl-4 text-sm font-light text-[#3a3a35]/80 italic leading-relaxed">
                    22 года в профессиональном футболе и 19 лет практики йоги научили меня выполнять свою работу в состоянии йоги — совмещать материальные обязанности и вместе с тем идти по духовному пути. Соединение древних йогических практик работы с дыханием и вниманием с активацией и пробуждением Кундалини Ма в Гималаях даст возможность получить невероятный духовный опыт.
                  </blockquote>
                </div>
              </div>
              </FadeUp>

              {/* ДАРЬЯ */}
              <FadeUp delay={200}>
              <div className="bg-white border border-[#e8e6e0] overflow-hidden h-full">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/retrite/daria.jpg"
                    alt="Дарья Смирнова"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-light text-[#3a3a35] mb-1">Дарья Смирнова</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-5">Основательница Сандхи-Хилинг</span>
                  <p className="text-sm font-light text-[#3a3a35]/80 leading-relaxed mb-6">
                    Меня зовут Даша. Я нахожусь в духовной практике более 25 лет. Индия занимает особое место в моей жизни — самые глубокие реализации у меня происходили именно там. Мой путь — это не теория, а живая и очень сильная практика жить эту жизнь в любви. Сегодня я делюсь этим опытом с людьми, помогая им раскрывать внутренний потенциал и углубляться в себя.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      '25+ лет в духовной практике',
                      'Многократные поездки в Индию',
                      'Основательница школы Сандхи-Хилинг, 1000+ учеников',
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-2 text-xs sm:text-sm text-[#3a3a35]/80 font-light">
                        <svg className="w-4 h-4 text-[#c9b896] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {li}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-2 border-[#c9b896] pl-4 text-sm font-light text-[#3a3a35]/80 italic leading-relaxed">
                    Не так много мест, при посещении которых раскрывается сердце и проясняется сознание. Большая удача знать эти места и побывать там. Я хочу каждому дать возможность почувствовать глубокое духовное счастье по-настоящему. Поэтому я приглашаю вас в Индию.
                  </blockquote>
                </div>
              </div>
              </FadeUp>
            </div>

            {/* Тандем */}
            <FadeUp>
            <div className="bg-[#3a3a35] text-white p-6 sm:p-8 text-center">
              <p className="text-sm sm:text-base font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
                Влад прошёл духовный путь через тело, спорт и строгую традицию — Дарья через сердце, чувствование и внутреннюю тишину. Два разных входа в одну и ту же реальность. Именно поэтому на этом ретрите найдёт себя каждый.
              </p>
            </div>
            </FadeUp>
          </div>
        </section>

        {/* ══ ГАЛЕРЕЯ ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Наши ретриты в Индии</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Как это было</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                '/images/retrite/gallery/him6.jpg',
                '/images/retrite/gallery/him1.jpg',
                '/images/retrite/gallery/him2.jpg',
                '/images/retrite/gallery/him3.jpg',
                '/images/retrite/gallery/him4.jpg',
                '/images/retrite/gallery/him5.jpg',
              ].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image src={src} alt={`Ретрит в Гималаях ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ОТЗЫВЫ ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Участники говорят</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Что говорят участники</h2>

            {/* Горизонтальный скролл вертикальных видео */}
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 snap-x snap-mandatory">
              {[
                { src: '/videos/yakov.mp4', name: 'Яков · 2024' },
                { src: '/videos/nadezhda.mp4', name: 'Надежда · 2025' },
                { src: '/videos/panchakarma.mp4', name: 'Панчакарма · 2026' },
                { src: '/videos/tatiana.mp4', name: 'Татьяна · 2026' },
                { src: '/videos/spania1.mp4', name: null },
                { src: '/videos/spania2.mp4', name: null },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[260px] sm:w-[300px] aspect-[9/16] bg-[#1a1a18] overflow-hidden snap-start"
                >
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                  {item.name && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 pointer-events-none">
                      <span className="text-[#c9b896] text-[10px] uppercase tracking-widest font-mono">{item.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ЛОГИСТИКА ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Детали и логистика</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Как всё устроено</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Даты', val: '1–15 июня 2026' },
                { label: 'Длительность', val: '15 дней' },
                { label: 'Место встречи', val: '1 июня, Дели' },
                { label: 'Проживание', val: 'Вилла 2000 м + отели/палатки во время трекинга' },
                { label: 'Питание', val: 'Вегетарианское, 2 раза в день, включено' },
                { label: 'Перелёт', val: 'Не включён в стоимость' },
                { label: 'Трансфер', val: 'Аэропорт и переезды по Гималаям включены' },
                { label: 'Группа', val: '13 человек' },
                { label: 'Уровень', val: 'Опыт в йоге не важен' },
                { label: 'Язык', val: 'Русский' },
                { label: 'Виза', val: 'Помогаем с оформлением' },
                { label: 'Рафтинг', val: 'По реке Алакананда — включён' },
              ].map((item) => (
                <div key={item.label} className="border border-[#e8e6e0] p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono mb-2">{item.label}</div>
                  <div className="text-sm text-[#3a3a35] font-light leading-relaxed">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ЦЕНА ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Стоимость участия</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Инвестиция в опыт, который останется с вами навсегда</h2>
            <div className="bg-white border border-[#e8e6e0] p-6 sm:p-10 mb-6">
              <div className="flex items-end gap-4 mb-8">
                <div className="text-5xl sm:text-6xl font-light text-[#3a3a35]">2 800€</div>
                <div className="text-sm text-[#3a3a35]/50 font-light pb-2">полный пакет</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#c9b896] font-mono mb-4">Что включено</div>
                  <ul className="space-y-2">
                    {[
                      'Проживание в течение всего ретрита',
                      'Вегетарианское питание 2 раза в день',
                      'Трансфер аэропорт Дели — вилла — аэропорт',
                      'Все переезды по Гималаям',
                      'Все практики и сатсанги',
                      'Помощь в оформлении визы',
                      'Сопровождение в течение всего тура',
                      'Рафтинг по реке Алакананда',
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-[#3a3a35]/80 font-light">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#3a3a35]/40 font-mono mb-4">Не входит</div>
                  <ul className="space-y-2">
                    {[
                      'Перелёт до Дели и обратно',
                      'Виза (помогаем оформить)',
                    ].map((li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-[#3a3a35]/50 font-light">
                        <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#e8e6e0]">
                <BookBtn onClick={() => setShowModal(true)} className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Частые вопросы</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Частые вопросы</h2>
            <div className="divide-y divide-[#e8e6e0]">
              {[
                { q: 'Нужен ли опыт в йоге?', a: 'Подходит для всех уровней — от начинающих до продвинутых. Практики мы адаптируем под каждого участника.' },
                { q: 'Безопасно ли в Гималаях?', a: 'Полностью безопасно. После этой поездки вы влюбитесь в Гималаи — именно так происходит с каждым нашим участником.' },
                { q: 'Какая физическая подготовка нужна?', a: 'Обсуждается индивидуально. Напишите нам — расскажем подробнее с учётом вашего уровня.' },
                { q: 'Можно ли приехать с партнёром?', a: 'Нужно — это один из лучших совместных опытов. Совместная практика в Гималаях меняет отношения.' },
                { q: 'Что брать с собой?', a: 'Подробный список вышлем в Telegram-группу после регистрации.' },
                { q: 'Как оформить визу?', a: 'Мы помогаем с оформлением. Расскажем всё что нужно сразу после бронирования места.' },
                { q: 'Условия отмены?', a: 'Аванс не возвращается. По остатку — индивидуально, в зависимости от срока отмены.' },
                { q: 'Есть ли свободное время?', a: 'Да, каждый день. Этот ретрит — про погружение, а не про плотную программу. Время для себя обязательно будет.' },
              ].map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#3a3a35] group-hover:text-[#c9b896] transition-colors pr-4">
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#c9b896] shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 text-sm font-light text-[#3a3a35]/70 leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ФИНАЛЬНЫЙ CTA ══ */}
        <section className="bg-[#3a3a35] py-20 sm:py-28 px-4 sm:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Осталось несколько мест</span>
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-6 leading-tight">
              Такая возможность предоставляется редко
            </h2>
            <p className="text-base sm:text-lg font-light text-white/70 mb-12 leading-relaxed">
              Если чувствуешь отклик — пиши в личные сообщения, чтобы обсудить детали.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#c9b896] text-[#3a3a35] hover:bg-white transition-all duration-300 font-medium tracking-wider text-sm"
            >
              Забронировать место
            </button>
            <p className="mt-8 text-white/40 font-mono text-xs">Ответим лично и расскажем все детали</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
