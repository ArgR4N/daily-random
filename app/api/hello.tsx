import { NextResponse } from 'next/server';

const MIN = 100;
const MAX = 100;

export async function GET() {
  const data = {"Message": "Hello World!"}

  return NextResponse.json({ data })
}
