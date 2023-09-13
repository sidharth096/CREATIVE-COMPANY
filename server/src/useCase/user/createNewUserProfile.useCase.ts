import { UserData, UserProfile } from "../../entity";
import { DependenciesData } from "../../entity/interface";




export const createNewUserProfile_useCase = (dependencies: DependenciesData) => {

    const {
        repository: {userRepository }
    } = dependencies

    const execute  =async ({
        name,
        email,
        password,
        phone,
    
    }:UserData) => {
        const userProfile = new UserProfile({
            name,
            email,
            password,
            phone,
        })
        return userRepository.createUser(userProfile)
    }
  return {
    execute
  }



}