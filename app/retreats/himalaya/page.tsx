'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['cyrillic', 'latin'], weight: ['900'] });

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

function BookBtn({ className = '' }: { className?: string }) {
  return (
    <a
      href={TELEGRAM_VLAD}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead'); }}
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3a3a35] text-white hover:bg-[#c9b896] hover:text-[#3a3a35] transition-all duration-300 font-light tracking-wider text-sm ${className}`}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.433 14.41l-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.385.176z"/>
      </svg>
      Забронировать место
    </a>
  );
}

export default function HimalayaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#e8e6e0]">

        {/* ══ ГЕРОЙ ══ */}
        <section className="relative pt-20">
          <div className="relative w-full aspect-[1015/571] lg:aspect-auto lg:h-[calc(100vh-80px)]">
            <Image
              src="/images/retrite/himalaya-hero.png"
              alt="Йога-ретрит в Гималаях"
              fill
              quality={100}
              className="object-cover object-center lg:object-[50%_50%]"
              priority
            />
            {/* Золотой заголовок поверх фото */}
            <div className="absolute inset-0 flex items-end pb-10 sm:pb-14 lg:pb-16 px-6 sm:px-10 lg:px-16">
              <h1
                className={`${inter.className} uppercase leading-[0.92] text-[13vw] sm:text-[10vw] lg:text-[8vw]`}
                style={{
                  background: 'linear-gradient(180deg, #FFE54A 0%, #D4A020 45%, #8B5A00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: [
                    'drop-shadow(1px 1px 0 #7A4000)',
                    'drop-shadow(2px 2px 0 #7A4000)',
                    'drop-shadow(3px 3px 0 #6A3200)',
                    'drop-shadow(4px 4px 0 #5A2800)',
                    'drop-shadow(5px 5px 0 #4A1E00)',
                    'drop-shadow(6px 6px 14px rgba(0,0,0,0.8))',
                  ].join(' '),
                }}
              >
                ЙОГА-РЕТРИТ<br />В ГИМАЛАЯХ
              </h1>
            </div>
          </div>

          {/* Meta bar */}
          <div className="bg-white mx-4 sm:mx-8 lg:mx-16 -mt-6 relative z-10 shadow-xl grid grid-cols-2 sm:grid-cols-4">
            {[
              { label: 'Даты', val: '1–15 июня 2026' },
              { label: 'Длительность', val: '15 дней' },
              { label: 'Группа', val: '13 человек' },
              { label: 'Стоимость', val: '2 800€' },
            ].map((item) => (
              <div key={item.label} className="p-5 sm:p-6 border-r border-b border-[#e8e6e0] last:border-r-0">
                <div className="text-[10px] uppercase tracking-widest text-[#3a3a35]/50 font-mono mb-1">{item.label}</div>
                <div className="text-sm sm:text-base font-medium text-[#3a3a35]">{item.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ МЕСТО СИЛЫ ══ */}
        <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24 max-w-5xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Место силы</span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] leading-tight mb-8 max-w-2xl">
            Почему именно Гималаи
          </h2>
          <div className="border-l-4 border-[#c9b896] pl-6 sm:pl-8 mb-10">
            <p className="text-lg sm:text-xl font-light text-[#3a3a35] leading-relaxed italic">
              Просто от пребывания посреди Гималайских вершин вы приобретаете тот опыт, который вы нигде больше не сможете получить. В Гималаях тысячи лет медитировали великие мудрецы и йоги, которые пришли к глубокой духовной реализации — и попадая в эти места силы, вы приобретаете внутреннюю силу, глубокое спокойствие и уверенность в своём пути.
            </p>
          </div>
          <p className="text-base sm:text-lg font-light text-[#3a3a35]/80 leading-relaxed mb-12">
            Практические аспекты йоги и аюрведы для познания себя, оздоровление тела и ума, расширение сознания. Как результат — спокойный и удовлетворённый ум, который делает жизнь человека счастливой.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏔', title: 'Внутренняя сила', text: 'Устойчивость, которая остаётся после возвращения' },
              { icon: '🌬', title: 'Работа с дыханием', text: 'Пранаяма и кундалини — на всю жизнь' },
              { icon: '🧘', title: 'Спокойствие ума', text: 'Тишина, недостижимая в городе' },
              { icon: '✨', title: 'Духовный опыт', text: 'Активация в местах силы — точка невозврата' },
            ].map((b) => (
              <div key={b.title} className="bg-white p-5 sm:p-6 border border-[#e8e6e0]">
                <div className="text-2xl mb-3">{b.icon}</div>
                <div className="text-sm font-medium text-[#3a3a35] mb-2">{b.title}</div>
                <div className="text-xs text-[#3a3a35]/60 leading-relaxed">{b.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ ПРОГРАММА ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Программа</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-12">Как устроены 15 дней</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '01', title: 'Утренняя практика', text: 'Пранаяма, медитация, асаны — каждый день на свежем воздухе в горах' },
                { num: '02', title: 'Сатсанги', text: 'Беседы о философии йоги, ведических текстах, разборы вопросов' },
                { num: '03', title: 'Трекинг', text: 'Священные места — ашрамы, храмы, горные тропы, водопады' },
                { num: '04', title: 'Работа с кундалини', text: 'Активация и пробуждение в местах силы Гималаев' },
                { num: '05', title: 'Рафтинг', text: 'По реке Алакананда — адреналин и живая природа' },
                { num: '06', title: 'Свободное время', text: 'Для интеграции, личной практики и просто — быть' },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 p-5 sm:p-6 border border-[#e8e6e0] hover:border-[#c9b896] transition-colors">
                  <div className="text-2xl font-light text-[#c9b896] font-mono shrink-0">{item.num}</div>
                  <div>
                    <div className="text-sm font-semibold text-[#3a3a35] mb-1">{item.title}</div>
                    <div className="text-sm font-light text-[#3a3a35]/70 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PhImg label="[ ФОТО — групповая практика, утренняя медитация в горах ]" className="w-full" />
            </div>
          </div>
        </section>

        {/* ══ ВЕДУЩИЕ ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Ведущие</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-4">Кто проведёт вас через этот опыт</h2>
            <p className="text-base font-light text-[#3a3a35]/70 mb-12 max-w-xl">
              Когда встречаются два практика с таким опытом — это редкость. Обычно подобный формат доступен только на ретритах за €3000+.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* ВЛАД */}
              <div className="bg-white border border-[#e8e6e0] overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about/IMG_6150.JPG"
                    alt="Владислав Чангелия"
                    fill
                    className="object-cover"
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

              {/* ДАРЬЯ */}
              <div className="bg-white border border-[#e8e6e0] overflow-hidden">
                <PhImg label="[ фото Дарьи — живое, из Индии или ретрита ]" aspect="aspect-[4/3]" className="w-full" />
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
            </div>

            {/* Тандем */}
            <div className="bg-[#3a3a35] text-white p-6 sm:p-8 text-center">
              <p className="text-sm sm:text-base font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
                [ Одно общее предложение о том, почему их тандем уникален — что даёт сочетание их подходов, чего не даст ни один из них по отдельности ]
              </p>
            </div>
          </div>
        </section>

        {/* ══ ГАЛЕРЕЯ ══ */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Наши ретриты в Индии</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Как это было</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[...Array(6)].map((_, i) => (
                <PhImg key={i} label={`[ фото ${i + 1} ]`} aspect="aspect-square" className="w-full" />
              ))}
            </div>
            <PhVideo label="[ ВИДЕО — 30–60 сек с прошлого ретрита ]" className="w-full aspect-video" />
          </div>
        </section>

        {/* ══ ОТЗЫВЫ ══ */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono block mb-6">Участники говорят</span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#3a3a35] mb-10">Что говорят участники</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white border border-[#e8e6e0] p-6">
                  <PhImg label={i % 2 === 0 ? '[ видео-отзыв ]' : '[ фото участника ]'} aspect={i % 2 === 0 ? 'aspect-video' : 'aspect-[4/3]'} className="w-full mb-4" />
                  <p className="text-sm font-light text-[#3a3a35]/80 leading-relaxed italic mb-3">
                    [ Что было до ретрита → что произошло → что изменилось после ]
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#c9b896] font-mono">[ Имя, город ]</span>
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
                <BookBtn className="w-full sm:w-auto" />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={TELEGRAM_VLAD}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead'); }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#c9b896] text-[#3a3a35] hover:bg-white transition-all duration-300 font-medium tracking-wider text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.433 14.41l-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.385.176z"/>
                </svg>
                Забронировать место
              </a>
              <a
                href={TELEGRAM_DASHA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/40 text-white hover:border-white transition-all duration-300 font-light tracking-wider text-sm"
              >
                Написать Дарье
              </a>
            </div>
            <p className="mt-8 text-white/40 font-mono text-xs">Ответим лично и расскажем все детали</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
