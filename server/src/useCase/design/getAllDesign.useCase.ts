
import { DependenciesData } from "../../entity/interface";

export const getAllDesign_useCase = (dependencies:DependenciesData)=>{
    
    const {repository:{designRepository}}=dependencies

    if(!designRepository){
        throw new Error("Should have designRepository")
    }
    
    const execute = ()=>{
        return designRepository.getAllDesign()
    }

    return {execute}
}