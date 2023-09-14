import express, { Router } from "express"
import { DependenciesData } from "../entity/interface"
import { adminController } from "../controller"


 export = (dependency:DependenciesData) =>{
    const router = express.Router()

    const {adminLoginController} = adminController(dependency)

    router.post("/adminLogin", adminLoginController)

    return router
}