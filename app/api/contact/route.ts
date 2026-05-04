import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, phone, channels } = await request.json();

  if (!name || !phone) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const channelText = channels?.length ? channels.join(', ') : 'не указан';

  const html = `
    <h2>Новая заявка с сайта vladyoga.com</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Способ связи:</strong> ${channelText}</p>
    <hr/>
    <p style="color:#999;font-size:12px">Ретрит в Гималаях · 1–15 июня 2026</p>
  `;

  await transporter.sendMail({
    from: `"Yoga with Vlady" <${process.env.SMTP_USER}>`,
    to: ['yevgen.stadnyk@gmail.com', 'vladybookings@gmail.com'],
    subject: `Заявка на ретрит: ${name}`,
    html,
  });

  return NextResponse.json({ success: true });
}
