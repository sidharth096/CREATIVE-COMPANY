import { DesignData,DesignProfile } from "../../entity";
import { DependenciesData } from "../../entity/interface";

export const designUpload_useCase = (dependency:DependenciesData)=>{

    
   const {repository:{designRepository}}=dependency

   const execute = async({imageUrl,categoryId} :DesignData)=>{
    

    const design = new DesignProfile({
        imageUrl,
        categoryId,
    })
    const newDesign = await designRepository.createDesign(design)

    return newDesign
    
  
   }

   return {execute}




}