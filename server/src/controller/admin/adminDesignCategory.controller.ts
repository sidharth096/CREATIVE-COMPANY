import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";



export = (dependency:DependenciesData):any =>{
    
    
    const{useCase:{designCategoryImageUpload_useCase}} =dependency

    const adminDesignCategory = async(req:Request,res:Response)=>{
        try {
  
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
              }

              const designCategoryData=req.body
              designCategoryData.imageUrl=req.file?.path
              console.log(designCategoryData);

              const DesignCategory = await designCategoryImageUpload_useCase(dependency).execute(designCategoryData)

              if(!DesignCategory){
                throw new Error ("Register error")
                
              }

              res.status(200).json({
                success:true,
                message:"Category added seccessfully",
                data:DesignCategory
              })
          
           
          


            

        } catch (error) {
            
        }
    }
    return adminDesignCategory

}