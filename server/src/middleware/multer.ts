// Import necessary modules and libraries
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import configkey from "../config";
import multer from "multer";
import {  Request, RequestHandler } from "express";

// Define Cloudinary configuration


cloudinary.config({
  cloud_name: configkey.CLOUDINARY_NAME,
  api_key: configkey.CLOUDINARY_APIKEY,
  api_secret: configkey.CLOUDINARY_APISECRET,
});

// Configure Cloudinary storage options for Multer
const storageOptions: CloudinaryStorageOptions = {
  cloudinary: cloudinary,
  params: {
    folder: "creative company",
    resource_type: "auto",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
    public_id: (req: Request, file: Express.Multer.File): string => {
      const fileName = file.originalname.split(".").slice(0, -1).join(".");
      return fileName;
    },
    
  },
};

// Create a new CloudinaryStorage instance
const storage = new CloudinaryStorage(storageOptions);

// Create a Multer middleware for handling file uploads with Cloudinary storage
const upload =  multer({ storage: storage })

// Export the upload middleware for use in Express routes
export { upload };

// Interface definition for CloudinaryStorageOptions
interface CloudinaryStorageOptions {
  cloudinary: any;
  params: {
    folder: string;
    resource_type: string;
    allowed_formats: string[];
    transformation: Array<{ [key: string]: any }>;
    public_id: (req: Request, file: Express.Multer.File) => string;
  };
}
