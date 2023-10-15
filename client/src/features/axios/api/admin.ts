import axios from "axios";
import { loginInterface } from "../../../types/userInterface";
import { log } from "console";

export const adminLogin = async (adminData:loginInterface):Promise<any>=>{
    try {
        const response = await axios ({
            method : 'post',
            url : 'http://localhost:5000/api/admin/adminLogin',
            data : adminData
        })
        
        return response.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
};

export const usersData = async (token:string|null)=>{
    try {

     const response = await axios({
       method: 'get',
       url: 'http://localhost:5000/api/admin/getAllUsers',
       headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
     })

     return response.data
     
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
 };

 export const WorkersData = async (token:string|null)=>{
    try {

     const response = await axios({
       method: 'get',
       url: 'http://localhost:5000/api/admin/getAllWorkers',
       headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
     })

     return response.data
     
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
 };

  export const WorkersDataForUsers = async (token:string|null):Promise<any>=>{
    try {

     const response = await axios({
       method: 'get',
       url: 'http://localhost:5000/api/user/getAllWorkers',
       headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
     })

     return response.data
     
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
 };



 export const blockUnBlock = async(userId:string)=>{
    try {
        
        const response = await axios({
            method:'patch',
            url: 'http://localhost:5000/api/admin/blockUnBlock',
            data:{userId}
        })
        return response
    } catch (error) {
        
    }
 }; 

 export const blockUnBlockWorker = async(workerId:string)=>{
  try {
      console.log("api");
      
      console.log(workerId);
      
      const response = await axios({
          method:'patch',
          url: 'http://localhost:5000/api/admin/blockUnBlockWorker',
          data:{workerId}
      })
      return response
  } catch (error) {
      
  }
}; 