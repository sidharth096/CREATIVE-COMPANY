import { Request,Response } from "express"
import { DependenciesData } from "../../entity/interface"


export =(dependency:DependenciesData)=>{

    const {useCase:{getAllUsers_useCase}}=dependency
  
    const adminGetAllUsers = async(req:Request,res:Response)=>{

        const users = await getAllUsers_useCase(dependency).execute()

        if(!users){
            return res.status(400).json({
                succes:false,
                message:"error getting users"
            })
        }
        res.status(200).json({
            success:true,
            message:"Users getting successfully",
            data:users
        })
    }

    return adminGetAllUsers 

}