import mongoose from "mongoose";
import configkey from "../config";

const connectDB = async () => {
  try {
    const dbOption = {
      dbName: configkey.DB_NAME
    };
  
    
    await mongoose.connect(configkey.MONGO_URL,dbOption);

    console.log("Database is connected........");
  } catch (error) {
    console.error("Database connection error..", error);

    // Exiting the process or handle the error later
    process.exit(1);
  }
};

export default connectDB;