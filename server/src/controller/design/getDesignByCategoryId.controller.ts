import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";

export =(dependcies:DependenciesData):any=>{

    const{useCase:{getDesignByCategoryId_useCase}}=dependcies

    const getDesignByCategoryId = async(req:Request,res:Response)=>{
        
  console.log("manu");
  
        console.log(req.body);
        const categoryId =req.body.categoryId

        const response = await getDesignByCategoryId_useCase(dependcies).execute(categoryId)

        console.log(response);
        

        if(!response){

        }

        return res.status(200).json({
            success:true,
            data:response,
           })
        
    }
    return getDesignByCategoryId

}