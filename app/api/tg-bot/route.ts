import { NextRequest, NextResponse } from 'next/server';

/*
  Реле для Telegram-бота @KundaliMa_bot.

  Telegram требует от вебхука ответ 200, а Google Apps Script на POST всегда
  отвечает редиректом 302 — из-за этого Telegram считал доставку неудачной и
  присылал одно и то же обновление снова и снова (бот «спамил» и тормозил).

  Этот маршрут принимает обновление от Telegram, пересылает его в Apps Script
  (следуя редиректу) и сразу отвечает Telegram кодом 200.
  Адрес для setWebhook: https://yoga-rosy-iota.vercel.app/api/tg-bot
*/

const APPS_SCRIPT_URL =
  process.env.TG_BOT_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwe45kh5RIIvAflSPhZzTUUWrjuktcEvcaa45RoWPpPiR5kChgre40l-68kJcwl62V5kA/exec';

export async function POST(request: NextRequest) {
  const body = await request.text();
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      redirect: 'follow',
      signal: AbortSignal.timeout(25000),
    });
  } catch (err) {
    console.error('tg-bot relay error:', err);
  }
  // Telegram нужен только код 200 — иначе он будет повторять обновление.
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true, relay: 'KundaliMa_bot' });
}
