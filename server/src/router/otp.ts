import express from 'express'
import { otpController } from '../controller'
import { DependenciesData } from '../entity/interface'

export =(dependcies:DependenciesData)=>{
    const router = express.Router()

    const{generateOtpController,verifyOtpController}=otpController(dependcies)

    router.post('/generateOtp',generateOtpController)
    router.post('/verifyOtp',verifyOtpController)

    return router
}