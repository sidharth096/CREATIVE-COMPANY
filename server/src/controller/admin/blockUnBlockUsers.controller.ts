import { Request,Response } from "express"
import { DependenciesData } from "../../entity/interface"

export =  (dependencies:DependenciesData)=>{

   const{useCase:{blockUnBlockUser_useCase}}=dependencies

  const blockUnBlock= async(req:Request,res:Response)=>{
     try {

        const userId = req.body.userId
        
        const response= await blockUnBlockUser_useCase(dependencies).execute(userId)

        return res.status(200).json({
         success:true,
         data:response,
        })

        
           
        
     } catch (error) {
        
     }
  }
  return blockUnBlock
}