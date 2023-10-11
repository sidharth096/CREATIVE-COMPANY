import express from "express"
import { userController } from "../../controller"
import { DependenciesData } from "../../entity/interface"


export  = (dependcies: DependenciesData)=>{ 
   const router = express.Router()

   const {userSignUpController,userLoginController } = userController(dependcies)

   router.post("/userRegister",userSignUpController )
   router.post("/userLogin",userLoginController)


   return router
}

