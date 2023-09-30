import * as dotenv from "dotenv";
dotenv.config();


const configkey = {

  PORT: process.env.PORT as string,
  MONGO_URL:process.env.MONGO_URL as string,
  DB_NAME: process.env.DB_NAME as string,
  JWT_KEY:process.env.JWT_KEY as string,
  JWT_KEY_ADMIN:process.env.JWT_KEY_ADMIN as string,
  CLOUDINARY_NAME:process.env.CLOUDINARY_NAME as string,
  CLOUDINARY_APIKEY:process.env.CLOUDINARY_APIKEY as string,
  CLOUDINARY_APISECRET:process.env.CLOUDINARY_APISECRET as string
 
};

export default configkey;