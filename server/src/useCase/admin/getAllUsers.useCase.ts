import { DependenciesData } from "../../entity/interface";

export const getAllUsers_useCase = (dependency:DependenciesData)=>{

      
    const {repository:{userRepository}} = dependency

    if(!userRepository){
        throw new Error("Should have user repository")
    }
    
    const execute = ()=>{
        
        return userRepository.getAllUsers()
    }

    return {execute}

}