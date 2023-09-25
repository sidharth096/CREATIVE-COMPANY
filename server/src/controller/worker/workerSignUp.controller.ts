import { Request, Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { getWorkerByEmail_useCase } from "../../useCase"; 
import {authServies} from "../service/authService"


export = (dependencies : DependenciesData): any => {

    const {
 useCase : {createNewWorkerProfile_useCase,getWorkerByPhone_useCase }
    }= dependencies

const createProfile =async (req: Request, res: Response) => {
    try {
        const wokerData = req.body

        console.log(wokerData);
        
        wokerData.email = wokerData.email.toLowerCase();
        
        const isExistingWorker = await getWorkerByEmail_useCase(dependencies).execute(wokerData.email)
        const isExistingWorkerByphone = await getWorkerByPhone_useCase(dependencies).execute(wokerData.phone)


        if(isExistingWorker || isExistingWorkerByphone){
         return res.status(400).json({
                success:false,
                message:"Worker already exist"
            })
        }

        wokerData.password = await authServies.passwordHashing(wokerData.password)

        const newUserData = await createNewWorkerProfile_useCase(dependencies).execute(wokerData)

        if (!newUserData) {
            console.log("register error");
            
        }

        res.status(200).json({
            success: true,
            message: "Worker registered successfully",
            data: newUserData
        })






    } catch (error: any) {
        console.log(error.message);
        
    }
}

return createProfile
}