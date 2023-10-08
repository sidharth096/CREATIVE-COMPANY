import { DesignCategoryData,DesignCategoryProfile } from "../../entity";
import { DependenciesData } from "../../entity/interface";
// import cloudinary from "../../config/cloudinary";

export const designCategoryImageUpload_useCase = (dependency:DependenciesData)=>{

    
   const {repository:{designCategoryRepository}}=dependency

   const execute = async({categoryName,imageUrl,designCategoryCount} :DesignCategoryData)=>{
    

    const designCategory = new DesignCategoryProfile({
        categoryName,
        imageUrl,
        designCategoryCount
    })
    const newDesign = await designCategoryRepository.createDesignCategory(designCategory)
    
    if(newDesign){
        return designCategoryRepository.getAllDesignCategory()
    }
       
   }

   return {execute}




}