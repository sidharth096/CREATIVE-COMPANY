export interface DependenciesData {
    useCase: useCaseData;
    repository: repositoryData

}


export interface repositoryData {
 userRepository: any;
 workerRepository:any;
 adminRepository:any;
 designCategoryRepository:any;
 designRepository:any
 

}


export interface useCaseData {
    createNewUserProfile_useCase: any
    getUserByEmail_useCase: any
    createNewWorkerProfile_useCase: any
    getWorkerByEmail_useCase :any
    getAdminByEmail_useCase:any
    designCategoryImageUpload_useCase:any
    getAllDesignCategory_useCase:any
    getWorkerByPhone_useCase:any
    getAllUsers_useCase:any
    getAllWorkers_useCase:any
    blockUnBlockUser_useCase:any
    blockUnBlockWorker_useCase:any
    designUpload_useCase:any
    getAllDesign_useCase:any
    getDesignByCategoryId_useCase:any
    generateOtp_useCase:any
    verifyOtp_useCase:any
    getUserByPhone_useCase:any
    
}