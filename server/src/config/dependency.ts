import { userRepository,workerRepository,adminRepository } from "../app/repository/mongo";


import { createNewUserProfile_useCase,getUserByEmail_useCase,createNewWorkerProfile_useCase,getWorkerByEmail_useCase,getAdminByEmail_useCase} from "../useCase";
 


const useCase = {
    createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase
}




const repository = {
    userRepository,
    workerRepository,
    adminRepository

    
}  



export =  {
    useCase,
    repository,
}