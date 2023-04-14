import { NextResponse } from "next/server";
import { mongoConnect } from "@/utils/mongoConnect";
import DailyRandom from "@/utils/DailyRandom";

export async function GET() {
  await mongoConnect();

  const numbers = await DailyRandom.findOne();

  return NextResponse.json({ numbers });
}
