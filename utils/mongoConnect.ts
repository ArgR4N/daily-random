import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function mongoConnect() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  const opts = {
    autoIndex: false,
  };

  mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose;
  });
}
