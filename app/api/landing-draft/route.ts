import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import LandingDraft from '@/models/LandingDraft';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug') || 'paris';
  await dbConnect();
  const draft = await LandingDraft.findOne({ slug });
  return NextResponse.json({ success: true, fields: draft?.fields || {} });
}

export async function POST(request: NextRequest) {
  const { slug = 'paris', fields } = await request.json();
  await dbConnect();
  const draft = await LandingDraft.findOneAndUpdate(
    { slug },
    { $set: { fields } },
    { upsert: true, new: true }
  );
  return NextResponse.json({ success: true, fields: draft.fields });
}
