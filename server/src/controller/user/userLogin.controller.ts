import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { authServies } from "../service/authService";

export = (dependencies :DependenciesData):any =>{

     const { useCase : {getUserByEmail_useCase}} = dependencies

     const userLogin =async (req:Request,res:Response)=>{
        try {

            const userData =req.body

            // console.log(userData);
            

            const isExistingUser = await getUserByEmail_useCase(dependencies).execute(userData.email)

            if(!isExistingUser){
                 return res.status(400).json({
                    success:false,
                    message:"User not found"
                 })
            }


            const isPasswordCheck = await authServies.comparePassword(userData.password,isExistingUser.password)
            console.log("333",isPasswordCheck);
            
            if(!isPasswordCheck){
                return res.status(400).json({
                    success:false,
                    message:"Password incorrect"
                })
            }

             
            const userId =  isExistingUser._id
            const token = await authServies.generateToken({id:userId,role:"user"})
            
            res.status(200).json({
                success:true,
                message:"Login successfull",
                data:isExistingUser,
                token:token
            })


            
        } catch (error:any) {
            console.log(error.message);
            
        }        
        
     }
     return  userLogin
    
} 