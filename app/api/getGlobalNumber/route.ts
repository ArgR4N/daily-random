import { NextResponse } from "next/server";
import { mongoConnect } from "@/utils/mongoConnect";
import DailyRandom from "@/utils/DailyRandom";

export async function GET() {
  await mongoConnect();
  const globalRandom = await DailyRandom.findOne()
    .exec()
    .then((numbers) => {
      if (!numbers.globalNumber)
        return NextResponse.json({ numbers: "No global number found" });
      return numbers.globalNumber;
    });

  console.log(globalRandom);

  return NextResponse.json({ globalRandom });
}
