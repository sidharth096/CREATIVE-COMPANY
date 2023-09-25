
import { DependenciesData } from "../../entity/interface";

export const getWorkerByPhone_useCase = (dependency:DependenciesData)=>{
   
    const{repository:{workerRepository}}=dependency

    if(!workerRepository){
        throw new Error("Should have worker repository")  
    }

    const execute =(phone:string)=>{
        return workerRepository.getWorkerByPhone(phone)
    }
    return {
        execute
    }


}