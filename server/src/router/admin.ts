import express, { Router } from "express"
import { DependenciesData } from "../entity/interface"
import { adminController } from "../controller"
import { upload } from "../middleware/multer"
import authMiddleware from "../middleware/authentication.middleware"
import authAdminMiddleware from "../middleware/authenticationAdmin.middleware"
import { handleUploadErrors } from "../middleware/multer"


 export = (dependency:DependenciesData) =>{
    const router = express.Router()

     const {adminLoginController,
            adminDesignCategoryController,
            adminGetAllUsersController,
            adminGetAllWorkersController,
            blockUnBlockUsersController,
            blockUnBlockWorkerController,
            addDesignController} = adminController(dependency)

    router.post("/adminLogin", adminLoginController)
    router.post("/addDesignCategory",upload.single("image"),handleUploadErrors,adminDesignCategoryController)
    router.post ('/addDesign',upload.single("image"),handleUploadErrors,addDesignController)

    router.get("/getAllUsers",authAdminMiddleware,adminGetAllUsersController)
    router.get("/getAllWorkers",authAdminMiddleware,adminGetAllWorkersController)

    router.patch("/blockUnBlock",blockUnBlockUsersController)
    router.patch("/blockUnBlockWorker",blockUnBlockWorkerController)

    return router
}