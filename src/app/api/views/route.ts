import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'app', 'api', 'views', 'views.json');
const COOKIE_NAME = 'profile_viewed';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 1 day

function readViews() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data).count || 0;
  } catch {
    return 0;
  }
}

function writeViews(count: number) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ count }), 'utf-8');
}

export async function GET(req: NextRequest) {
  let count = readViews();
  const cookie = req.cookies.get(COOKIE_NAME);

  if (!cookie) {
    count += 1;
    writeViews(count);
    const res = NextResponse.json({ count });
    res.cookies.set(COOKIE_NAME, '1', { maxAge: COOKIE_MAX_AGE, path: '/' });
    return res;
  }

  return NextResponse.json({ count });
}
