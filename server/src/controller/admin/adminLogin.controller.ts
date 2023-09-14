import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { authServies } from "../service/authService";


export = (dependency:DependenciesData):any=>{
    const {useCase:{getAdminByEmail_useCase}} = dependency

    const adminLogin = async(req:Request,res:Response)=>{
          
        try {
            const adminData= req.body
            
            console.log(adminData);
            

            const isAdmin = await getAdminByEmail_useCase(dependency).execute(adminData.email)
            if(!isAdmin){
                return res.status(400).json({
                   success:false,
                   message:"Invalid credential"
                })
           }


           const isPasswordCheck = await authServies.comparePassword(adminData.password,isAdmin.password)
           
           if(!isPasswordCheck){
               return res.status(400).json({
                   success:false,
                   message:"Password incorrect"
               })
           }

            
           const adminId =  isAdmin._id
           const token = await authServies.generateToken({id:adminId,role:"user"})
           
               res.status(200).json({
               success:true,
               message:"Login successfull",
               data:isAdmin,
               token:token
           })
        } catch (error) {
            
        }

    }
    return adminLogin
}