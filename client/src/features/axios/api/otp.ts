import axios from "axios";


export const generateOtp = async (phone:string): Promise<any> => {
    try {

      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/otp/generateOtp',
        data: {phone},
      });
  
      console.log( response.data.message);
      return response.data;
    } catch (error:any) {
        
      throw new Error(error.response.data.message);
    }
  };
  export const verifyOtp = async (phone:string,otp:string[]): Promise<any> => {
    try {
      
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/otp/verifyOtp',
        data: {phone,otp},
      });
  
      console.log( response.data.message);
      return response.data;
    } catch (error:any) {
        
      throw new Error(error.response.data.message);
    }
  };