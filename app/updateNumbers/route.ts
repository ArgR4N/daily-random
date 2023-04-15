import { NextResponse } from "next/server";
import { mongoConnect } from "@/utils/mongoConnect";
import DailyRandom from "@/utils/DailyRandom";

export async function GET() {
  await mongoConnect();

  const globalNumber = Math.floor(Math.random() * Math.pow(10, Math.random() * 10 + 1));

  await DailyRandom.findOneAndUpdate({}, { globalNumber }, { upsert: true });

  const dailyRandom = await DailyRandom.findOne({}, { _id: 0, __v: 0 });

  return NextResponse.json({ numbers: dailyRandom });
}