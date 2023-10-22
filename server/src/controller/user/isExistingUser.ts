import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";

export = (dependencies :DependenciesData):any =>{

     const { useCase : {getUserByEmail_useCase}} = dependencies

     const isExistingUserUSer =async (req:Request,res:Response)=>{
        try {

            const userData =req.body

            console.log(userData);
            
            userData.email = userData.email.toLowerCase();
        
            const isExistingUser = await getUserByEmail_useCase(dependencies).execute(userData.email)
            
    
            if(isExistingUser){
                   return res.status(400).json({
                    success:false,
                    message:"User already exist",
                })
               
            }

            res.status(200).json({
                success:true,
                message:"User not found"
            })
            

            
        } catch (error:any) {
            console.log(error.message);
            
        }        
        
     }
     return  isExistingUserUSer
    
} 