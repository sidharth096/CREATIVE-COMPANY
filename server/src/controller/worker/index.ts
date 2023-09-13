
import workerSignUpController from "./workerSignUp.controller";
import workerLoginController from "./workerLogin.controller";

export = (dependencies : any)=>{
    return{
        workerSignUpController : workerSignUpController(dependencies),
        workerLoginController :workerLoginController(dependencies)
    }
   
}