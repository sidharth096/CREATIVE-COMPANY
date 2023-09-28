import { DependenciesData } from "../../entity/interface";

export const getAllWorkers_useCase = (dependency:DependenciesData) =>{

    const {repository:{workerRepository}}=dependency

    if(!workerRepository){
        throw new Error("Should have worker repository")
    }

    const execute= async()=>{
        
        return  workerRepository.getAllWorkers()   
    }

    return {execute}


}