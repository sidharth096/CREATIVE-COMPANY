import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";


export = (dependencies :DependenciesData):any =>{

     const { useCase : {getWorkerByEmail_useCase,getWorkerByPhone_useCase}} = dependencies

     const isExistingWorker =async (req:Request,res:Response)=>{
        try {

            const userData =req.body
            
            userData.email = userData.email.toLowerCase();
        
            const isExistingWorker = await getWorkerByEmail_useCase(dependencies).execute(userData.email)
            
            const isExistingWorkerByPhone = await getWorkerByPhone_useCase(dependencies).execute(userData.phone)
            

            if(isExistingWorker|| isExistingWorkerByPhone){
                   return res.status(400).json({
                    success:false,
                    message:"Worker already exist",
                })
               
            }

            res.status(200).json({
                success:true,
                message:"Worker not found"
            })
            

            
        } catch (error:any) {
            console.log(error.message);
            
        }        
        
     }
     return  isExistingWorker
    
} 