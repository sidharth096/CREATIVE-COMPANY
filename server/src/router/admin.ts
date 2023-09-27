import express, { Router } from "express"
import { DependenciesData } from "../entity/interface"
import { adminController } from "../controller"
import { upload } from "../middleware/multer"
import authMiddleware from "../middleware/authentication.middleware"
import { handleUploadErrors } from "../middleware/multer"


 export = (dependency:DependenciesData) =>{
    const router = express.Router()

    const {adminLoginController,adminDesignCategoryController} = adminController(dependency)

    router.post("/adminLogin", adminLoginController)
    router.post("/addDesignCategory",authMiddleware,upload.single("image"),handleUploadErrors,adminDesignCategoryController)

    return router
}