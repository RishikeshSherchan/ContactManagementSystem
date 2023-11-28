import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

const __dirname = process.cwd();
const envPath = path.resolve(__dirname, "config", ".env");
dotenv.config({ path: envPath });

const dbUrl =
  process.env.MONGO_URL_DATABASE ||
  "mongodb://localhost:27017/ContactManagementSystem";

export const ConnectToDB = async () => {
  try {
    const connection = await mongoose.connect(`${dbUrl}`);
    console.log("Connection", connection.connection.name);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not Connected");
    console.log(error);
  }
};
