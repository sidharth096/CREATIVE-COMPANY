import axios from 'axios'
import { workerSignupInterface } from '../../../types/workerInterface'
import { loginInterface } from '../../../types/userInterface';



export const workerRegister = async (workerData:workerSignupInterface)=>{
    try {
        const response = await axios ({
            method : 'post',
            url : 'http://localhost:5000/api/worker/workerRegister',
            data : workerData,
        })
        console.log( response.data.message);
        return response.data;
      } catch (error:any) {
        throw new Error(error.response.data.message);
      }
    
}

export const workerLogin = async (workerData:loginInterface):Promise<any>=>{
  console.log("workerData",workerData);
  try {
     const response = await axios ({
       method : 'post',
       url : 'http://localhost:5000/api/worker/workerLogin',
       data : workerData,
    })
    console.log( response.data.message);
    return response.data
    
  } catch (error:any) {
    throw new Error(error.response.data.message)
  }
}

export const googleLoginWorker  = async (workerData:any):Promise<any>=>{
  console.log("workerData",workerData);
  try {
     const response = await axios ({
       method : 'post',
       url : 'http://localhost:5000/api/worker/googleLoginWorker',
       data : workerData,
    })
    console.log( response.data.message);
    return response.data
    
  } catch (error:any) {
    throw new Error(error.response.data.message)
  }
}


export const isExistingWorker =async (email:string,phone:string)=>{
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/worker/isExistingWorker',
      data:{email,phone}
    })
    console.log( response.data.message);
    return response;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};