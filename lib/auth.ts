import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export function requireAuth(request: NextRequest): NextResponse | null {
  const token = request.cookies.get('admin-token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return null; // null = OK, продолжаем выполнение
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
