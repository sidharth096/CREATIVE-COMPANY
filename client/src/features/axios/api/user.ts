

import axios from 'axios'
import { loginInterface,signupInterface } from "../../../types/userInterface";
import configKeys from '../../../util/config';
import { error } from 'console';

const apiConfig = configKeys.API_URL


export const userLogin = async (userData: loginInterface): Promise<any> => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/userLogin',
        data: userData,
      });
  
      console.log( response.data.message);
      return response;
    } catch (error:any) {
        
      throw new Error(error.response.data.message);
    }
  };


export const userRegister =async (userData:signupInterface)=>{
  try {
    
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/user/userRegister',
      data: userData,
    })
    console.log( response.data.message);
    return response;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
}
  