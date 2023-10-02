
import { DependenciesData } from "../../entity/interface";


export const blockUnBlockUser_useCase = (dependency:DependenciesData)=>{

    
   const {repository:{userRepository}}=dependency

   if(!userRepository){
    throw new Error("should have userRepository")
   }
   

   const execute = (userId:string)=>{

       return userRepository.blockUnBlock(userId)
   }  

   return {execute}



}