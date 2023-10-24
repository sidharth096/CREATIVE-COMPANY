import express from 'express'
import { DependenciesData } from '../entity/interface'
import { workerController } from '../controller'


export  = (dependcies:DependenciesData)=>{
    const router = express.Router()

    const {workerSignUpController,workerLoginController,isExistingWorker} = workerController(dependcies)

    router.post("/workerRegister",workerSignUpController )
    router.post("/workerLogin",workerLoginController)
    router.post("/isExistingWorker",isExistingWorker)

    return router
 
}