import { Request, Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { getUserByEmail_useCase } from "../../useCase";
import {authServies} from "../service/authService"


export = (dependencies : DependenciesData): any => {

    const {
 useCase : {createNewUserProfile_useCase }
    }= dependencies

const createProfile =async (req: Request, res: Response) => {
    try {
        const userData = req.body

        // console.log(userData);
        
        userData.email = userData.email.toLowerCase();
        
        const isExistingUser = await getUserByEmail_useCase(dependencies).execute(userData.email)
        

        if(isExistingUser){
               return res.status(400).json({
                success:false,
                message:"User already exist",
            })
           
        }

        userData.password = await authServies.passwordHashing(userData.password)

        const newUserData = await createNewUserProfile_useCase(dependencies).execute(userData)

        if (!newUserData) {
            console.log("register error");
            
        }

            res.status(200).json({
            success: true,
            message: "user is register successfully",
            data: newUserData
        })






    } catch (error: any) {
        console.log(error.message);
        
    }
}

return createProfile
}