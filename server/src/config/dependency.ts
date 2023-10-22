import { userRepository,workerRepository,adminRepository,designCategoryRepository ,designRepository} from "../app/repository/mongo";


import { createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase,
    getAdminByEmail_useCase,
    designCategoryImageUpload_useCase,
    getAllDesignCategory_useCase,
    getWorkerByPhone_useCase,
    getAllUsers_useCase,
    getAllWorkers_useCase,
    blockUnBlockUser_useCase,
    blockUnBlockWorker_useCase,
    designUpload_useCase,
    getAllDesign_useCase,
    getDesignByCategoryId_useCase,
    generateOtp_useCase,
    verifyOtp_useCase


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
    getAllWorkers_useCase,
    blockUnBlockUser_useCase,
    blockUnBlockWorker_useCase,
    designUpload_useCase,
    getAllDesign_useCase,
    getDesignByCategoryId_useCase,
    generateOtp_useCase,
    verifyOtp_useCase
}




const repository = {
    userRepository,
    workerRepository,
    adminRepository,
    designCategoryRepository,
    designRepository

    
}  



export =  {
    useCase,
    repository,
}