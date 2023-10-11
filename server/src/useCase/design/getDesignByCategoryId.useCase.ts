import { DependenciesData } from "../../entity/interface";

export const getDesignByCategoryId_useCase = (dependencies:DependenciesData)=>{
    
    const {repository:{designRepository}}=dependencies

    if(!designRepository){
        throw new Error("Should have designCategoryRepository")
    }
    
    const execute = (categoryId:string)=>{
        return designRepository.getDesignByCategoryId(categoryId)
    }

    return {execute}
}