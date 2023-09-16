
import { DependenciesData } from "../../entity/interface";

export const getAllDesignCategory_useCase = (dependencies:DependenciesData)=>{
    
    const {repository:{designCategoryRepository}}=dependencies

    if(!designCategoryRepository){
        throw new Error("Should have designCategoryRepository")
    }
    
    const execute = ()=>{
        return designCategoryRepository.getAllDesignCategory()
    }

    return {execute}
}