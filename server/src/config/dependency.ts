import { userRepository,workerRepository,adminRepository,designCategoryRepository } from "../app/repository/mongo";


import { createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase,
    designCategoryImageUpload_useCase
} from "../useCase";
 


const useCase = {
    createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase,
    designCategoryImageUpload_useCase
}




const repository = {
    userRepository,
    workerRepository,
    adminRepository,
    designCategoryRepository

    
}  



export =  {
    useCase,
    repository,
}