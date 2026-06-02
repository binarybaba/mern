import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`, { dbName: DB_NAME })
    console.log(`MongoDB connected!! DB host: ${connectionInstance.connection.host}`)
  } catch(error) {
    console.log("MongoDB connection error", error);
    process.exit();
  }
}