import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";



export = (dependencies:DependenciesData):any =>{

    
    const {useCase:{getAllDesignCategory_useCase}} = dependencies

    const getAllDesignCategory = async(req:Request,res:Response)=>{
        try {
       
        const AllDesignCategories = await getAllDesignCategory_useCase(dependencies).execute()

        
        

            if(!AllDesignCategories){
                return res.status(400).json({
                    success:false,
                    message:"No design categories"
                })
            }

            res.status(200).json({
                success:true,
                message:"Design cataegories",
                data:AllDesignCategories
            })
        } catch (error:any) {
            console.log(error.message);
            
        }

        
    }
    return getAllDesignCategory

 

}