
import workerSignUpController from "./workerSignUp.controller";
import workerLoginController from "./workerLogin.controller";
import isExistingWorker from "./isExistingWorker";
import googleLoginWorkerController from "./googleLoginWorker.controller";

export = (dependencies : any)=>{
    return{
        workerSignUpController : workerSignUpController(dependencies),
        workerLoginController :workerLoginController(dependencies),
        isExistingWorker:isExistingWorker(dependencies),
        googleLoginWorkerController:googleLoginWorkerController(dependencies)
    }
   
}