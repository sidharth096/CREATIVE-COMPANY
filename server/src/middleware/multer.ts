// Import necessary modules and libraries
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import configkey from "../config";
import multer, { MulterError } from "multer";
import {  Request, ErrorRequestHandler,NextFunction,Response } from "express";

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

//middleware to handle errors during file upload
export const handleUploadErrors: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MulterError) {
    // Handle Multer errors (e.g., file size exceeded, file type not allowed)
    res.status(400).json({ error: "Multer error: " + err.message });
  } else if (err && err.message) {
    // Handle other errors (e.g., Cloudinary API errors)
    res.status(500).json({ error:  err.message });
  } else {
    next(); // If no errors occurred, pass control to the next middleware
  }
};

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
