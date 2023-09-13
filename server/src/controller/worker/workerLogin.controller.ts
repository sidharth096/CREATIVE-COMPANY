import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { authServies } from "../service/authService";

export = (dependencies :DependenciesData):any =>{

     const { useCase : {getWorkerByEmail_useCase}} = dependencies

     const workerLogin =async (req:Request,res:Response)=>{
        try {

            const workerData =req.body

            // console.log(userData);
            

            const isExistingWorker = await getWorkerByEmail_useCase(dependencies).execute(workerData.email)

            if(!isExistingWorker){
                 return res.status(400).json({
                    success:false,
                    message:"Worker not found"
                 })
            }


            const isPasswordCheck = await authServies.comparePassword(workerData.password,isExistingWorker.password)
            
            if(!isPasswordCheck){
                return res.status(400).json({
                    success:false,
                    message:"Password incorrect"
                })
            }

             
            const userId =  isExistingWorker._id
            const token = await authServies.generateToken({id:userId,role:"user"})
            
            res.status(200).json({
                success:true,
                message:"Login successfull",
                data:isExistingWorker,
                token:token
            })


            
        } catch (error:any) {
            console.log(error.message);
            
        }        
        
     }
     return  workerLogin
    
} 