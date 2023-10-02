import { Request,Response } from "express"
import { DependenciesData } from "../../entity/interface"

export = (dependencies:DependenciesData)=>{

   const{useCase:{blockUnBlockWorker_useCase}}=dependencies

  const blockUnBlockWorker= async(req:Request,res:Response)=>{
     try {
        console.log(req.body);
        const workerId = req.body.workerId
        console.log(workerId)  
        
        const response= await blockUnBlockWorker_useCase(dependencies).execute(workerId)

        return res.status(200).json({
         success:true,
         data:response,
        })

        
           
        
     } catch (error) {
        
     }
  }
  return blockUnBlockWorker
}