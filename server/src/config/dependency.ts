import { userRepository,workerRepository,adminRepository,designCategoryRepository } from "../app/repository/mongo";


import { createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase,
    designCategoryImageUpload_useCase,
    getAllDesignCategory_useCase,
    getWorkerByPhone_useCase,
    getAllUsers_useCase,
    getAllWorkers_useCase

} from "../useCase";
 


const useCase = {
    createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase,
    designCategoryImageUpload_useCase,
    getAllDesignCategory_useCase,
    getWorkerByPhone_useCase,
    getAllUsers_useCase,
    getAllWorkers_useCase
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