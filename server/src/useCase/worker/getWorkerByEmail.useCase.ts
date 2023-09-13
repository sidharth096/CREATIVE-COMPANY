
import { DependenciesData } from "../../entity/interface";

export const getWorkerByEmail_useCase = (dependency:DependenciesData)=>{
   
    const{repository:{workerRepository}}=dependency

    if(!workerRepository){
        throw new Error("Should have worker repository")  
    }

    const execute =(email:string)=>{
        return workerRepository.getWorkerByEmail(email)
    }
    return {
        execute
    }


}