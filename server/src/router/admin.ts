import express, { Router } from "express"
import { DependenciesData } from "../entity/interface"
import { adminController } from "../controller"
import { upload } from "../middleware/multer"
import authMiddleware from "../middleware/authentication.middleware"
import { handleUploadErrors } from "../middleware/multer"


 export = (dependency:DependenciesData) =>{
    const router = express.Router()

    const {adminLoginController,adminDesignCategoryController,adminGetAllUsersController,adminGetAllWorkersController} = adminController(dependency)

    router.post("/adminLogin", adminLoginController)
    router.post("/addDesignCategory",authMiddleware,upload.single("image"),handleUploadErrors,adminDesignCategoryController)

    router.get("/getAllUsers",authMiddleware,adminGetAllUsersController)
    router.get("/getAllWorkers",adminGetAllWorkersController)

    return router
}