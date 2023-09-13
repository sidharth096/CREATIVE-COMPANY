import userSignUpController from "./usesrSignUp.controller";
import userLoginController from "./userLogin.controller";



export = (dependencies: any) => {
    return {
        userSignUpController: userSignUpController(dependencies),
        userLoginController:userLoginController(dependencies)
    }

    
}