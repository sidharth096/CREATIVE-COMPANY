import { DependenciesData } from "../../entity/interface";

 export const getUserByPhone_useCase = (dependencies: DependenciesData)=>{
 
    const { 
        repository:{userRepository}
    }= dependencies
    
    
    if(!userRepository){
        throw new Error("should have user repository")
    }

    const execute = (phone:string) => {

      return  userRepository.getUserByPhone(phone)
    }
    return {
        execute
    }
     
}