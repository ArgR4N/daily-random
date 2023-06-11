import { Schema, model, models } from "mongoose";

interface IDailyRandom {
  globalNumber: number;
}

const dailyRandomSchema = new Schema<IDailyRandom>(
  {
    globalNumber: { type: Number, required: true },
  },
  { collection: "dailyRandom" }
);

export default models.DailyRandom ||
  model<IDailyRandom>("DailyRandom", dailyRandomSchema);
