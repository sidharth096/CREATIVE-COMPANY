export interface DependenciesData {
    useCase: useCaseData;
    repository: repositoryData

}


export interface repositoryData {
 userRepository: any;
 workerRepository:any;
 

}


export interface useCaseData {
    createNewUserProfile_useCase: any
    getUserByEmail_useCase: any
    createNewWorkerProfile_useCase: any
    getWorkerByEmail_useCase :any
    
}