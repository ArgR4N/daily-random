import mongoose from 'mongoose'
const MONGODB_URI  = "mongodb+srv://hellodb:hellodb@cluster0.taq3x.mongodb.net/?retryWrites=true&w=majority"

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

console.log(MONGODB_URI)

let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function mongoConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if(!MONGODB_URI){
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

  if (!cached.promise) {
    const opts = {
      autoIndex: false, 
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

