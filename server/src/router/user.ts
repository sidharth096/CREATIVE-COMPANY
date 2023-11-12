import express from "express"
import { adminController, userController } from "../controller"
import { DependenciesData } from "../entity/interface"


export  = (dependcies: DependenciesData)=>{ 
   const router = express.Router()

   const {userSignUpController,userLoginController,isExistingUser,googleLoginUserController } = userController(dependcies)
   const {adminGetAllWorkersController}=adminController(dependcies)

   router.post("/userRegister",userSignUpController )
   router.post("/userLogin",userLoginController)
   router.post("/googleLoginUser",googleLoginUserController)
   router.post("/isExistingUser",isExistingUser)
   router.get("/getAllWorkers",adminGetAllWorkersController)


   return router
}

