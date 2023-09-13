import { userRepository,workerRepository } from "../app/repository/mongo";


import { createNewUserProfile_useCase,getUserByEmail_useCase,createNewWorkerProfile_useCase,getWorkerByEmail_useCase } from "../useCase";
 


const useCase = {
    createNewUserProfile_useCase,
    getUserByEmail_useCase,
    createNewWorkerProfile_useCase,
    getWorkerByEmail_useCase
}




const repository = {
    userRepository,
    workerRepository

    
}  



export =  {
    useCase,
    repository,
}