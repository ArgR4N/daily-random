import { Schema, model, models } from "mongoose";

interface IDailyRandom {
  globalNumber: number;
}

const dailyRandomSchema = new Schema<IDailyRandom>({
  globalNumber: { type: Number, required: true },
});

export default models.DailyRandom ||
  model<IDailyRandom>("dailyRandom", dailyRandomSchema);
