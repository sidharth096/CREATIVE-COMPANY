import * as dotenv from "dotenv";
dotenv.config();


const configkey = {

  PORT: process.env.PORT as string,
  MONGO_URL:process.env.MONGO_URL as string,
  DB_NAME: process.env.DB_NAME as string,
  JWT_KEY:process.env.JWT_KEY as string
 
};

export default configkey;