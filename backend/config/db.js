import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ezcjmm3.mongodb.net/${dbName}`);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;