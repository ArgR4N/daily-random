import { NextResponse } from "next/server";
import { mongoConnect } from "@/utils/mongoConnect";
import DailyRandom from "@/utils/DailyRandom";
import { updateNumbers } from "@/utils/updateNumbers";

export async function GET() {
  await mongoConnect();

  const numbers = await updateNumbers();

  return NextResponse.json({ numbers });
}
