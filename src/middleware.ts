import { NextResponse } from 'next/server';

export const config = {};

export function middleware() {
  return NextResponse.next();
}
