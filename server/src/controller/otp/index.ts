import { DependenciesData } from "../../entity/interface";
import generateOtpController from "./generateOtp.controller";
import verifyOtpController from "./verifyOtp.controller";

export=(dependcies:DependenciesData)=>{
    return{
        generateOtpController:generateOtpController(dependcies),
        verifyOtpController:verifyOtpController(dependcies)
    }
}