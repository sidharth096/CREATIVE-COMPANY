import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";



export = (dependency:DependenciesData):any =>{
    
    
    const{useCase:{designCategoryImageUpload_useCase}} =dependency

    const adminDesignCategory = async(req:Request,res:Response)=>{
        try {
  
          console.log("hello");
          console.log(req.body);
          console.log(req.file);
          
          
          
            if (!req.file) {
                return res.status(400).json({
                  success:false,
                  message: 'No file uploaded.' 
                });
            } 
            console.log("sidharth");
            

              const designCategoryData=req.body
              designCategoryData.imageUrl=req.file?.path
              console.log(designCategoryData);

              const DesignCategories = await designCategoryImageUpload_useCase(dependency).execute(designCategoryData)

              if(!DesignCategories){
                throw new Error ("Register error")
                
              }

              res.status(200).json({
                success:true,
                message:"Category added seccessfully",
                data:DesignCategories
              })
          
           
          


            

        } catch (error) {
            
        }
    }
    return adminDesignCategory

}