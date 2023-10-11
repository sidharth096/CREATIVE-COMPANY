import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";



export = (dependencies:DependenciesData):any =>{

    
    const {useCase:{getAllDesign_useCase}} = dependencies

    const getAllDesigns = async(req:Request,res:Response)=>{
        try {
       
        const AllDesigns= await getAllDesign_useCase(dependencies).execute()

        
        

            if(!AllDesigns){
                return res.status(400).json({
                    success:false,
                    message:"No designs"
                })
            }

            res.status(200).json({
                success:true,
                message:"Design",
                data:AllDesigns
            })
        } catch (error:any) {
            console.log(error.message);
            
        }

        
    }
    return getAllDesigns

 

}