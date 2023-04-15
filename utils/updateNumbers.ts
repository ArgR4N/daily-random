import { mongoConnect } from "./mongoConnect";
import DailyRandom from "./DailyRandom";

export async function updateNumbers() {
  await mongoConnect();
  const globalNumber = Math.floor(
    Math.random() * Math.pow(10, Math.random() * 10 + 1)
  );
  await DailyRandom.findOneAndUpdate({}, { globalNumber }, { upsert: true });

  const numbers = await DailyRandom.findOne();

  return numbers;
}
