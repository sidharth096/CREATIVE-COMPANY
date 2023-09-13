
import { DependenciesData } from "../../entity/interface";

 export const getUserByEmail_useCase = (dependencies: DependenciesData)=>{
 
    const { 
        repository:{userRepository}
    }= dependencies
    
    
    if(!userRepository){
        throw new Error("should have user repository")
    }

    const execute = (email:string) => {
      return  userRepository.getUserByEmail(email)
    }
    return {
        execute
    }
     
}