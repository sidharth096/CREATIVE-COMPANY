import userSignUpController from "./usesrSignUp.controller";
import userLoginController from "./userLogin.controller";
import isExistingUser from "./isExistingUser";



export = (dependencies: any) => {
    return {
        userSignUpController: userSignUpController(dependencies),
        userLoginController:userLoginController(dependencies),
        isExistingUser:isExistingUser(dependencies)
    }

    
}