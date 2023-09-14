
import { DependenciesData } from "../../entity/interface";

export const getAdminByEmail_useCase = (dependency:DependenciesData)=>{

      
    const {repository:{adminRepository}} = dependency

    if(!adminRepository){
        throw new Error("Should have admin repository")
    }
    
    const execute = (email:string)=>{
        
        return adminRepository.getAdminByEmail(email)
    }

    return {execute}

}