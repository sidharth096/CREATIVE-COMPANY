import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";


export = (dependencies :DependenciesData):any =>{

     const { useCase : {getUserByEmail_useCase,getUserByPhone_useCase}} = dependencies

     const isExistingUserUSer =async (req:Request,res:Response)=>{
        try {

            const userData =req.body
            
            userData.email = userData.email.toLowerCase();
        
            const isExistingUser = await getUserByEmail_useCase(dependencies).execute(userData.email)
            
            const isExistingUserByPhone = await getUserByPhone_useCase(dependencies).execute(userData.phone)
            

            if(isExistingUser|| isExistingUserByPhone){
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