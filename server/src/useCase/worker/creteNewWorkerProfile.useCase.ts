import { WorkerData,WorkerProfile } from "../../entity";
import { DependenciesData } from "../../entity/interface";




export const createNewWorkerProfile_useCase = (dependencies: DependenciesData) => {

    const {  repository: {workerRepository }} = dependencies

    const execute  =async ({
        name,
        email,
        password,
        phone,
    
    }:WorkerData) => {
        const workerProfile = new WorkerProfile({
            name,
            email,
            password,
            phone,
        })
        return workerRepository.createWorker(workerProfile)
    }
  return {
    execute
  }



}