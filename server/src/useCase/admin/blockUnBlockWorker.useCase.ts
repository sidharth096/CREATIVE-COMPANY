
import { DependenciesData } from "../../entity/interface";


export const blockUnBlockWorker_useCase = (dependency:DependenciesData)=>{

    
   const {repository:{workerRepository}}=dependency

   if(!workerRepository){
    throw new Error("should have workerRepository")
   }
   

   const execute = (workerId:string)=>{

       return workerRepository.blockUnBlockWorker(workerId)
   }  

   return {execute}



}