import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = "e-commerce";

const client = new MongoClient(MONGO_URI);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(DB_NAME);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export { client };
