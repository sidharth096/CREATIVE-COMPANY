import { DependenciesData } from "../../entity/interface";
import { Request,Response } from "express";


export =(dependencies:DependenciesData)=>{

    const {useCase:{designUpload_useCase}}=dependencies
    
    const addDesign = async (req:Request,res:Response)=>{

       console.log("hello");
       console.log(req.body);
       console.log(req.file);

       if(!req.file){
        res.status(400).json({
            succuss:false,
            message:"No file uploaded"
        })
       }
       
       const designData=req.body
       designData.imageUrl=req.file?.path
       console.log(designData);

       const Design = await designUpload_useCase(dependencies).execute(designData)

        res.status(200).json({
            succuss:true,
            message:'Design added successfully',
            data:Design
        })
       
    }
    return addDesign
} 