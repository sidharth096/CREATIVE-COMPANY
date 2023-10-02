import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import configkey from "../../config";

export const authServies = {
    comparePassword: async(password:string,hashedPassword:string)=>{
            
      let result= await bcrypt.compare(password,hashedPassword)
      return result
    },
    passwordHashing: async(password:string)=>{
      try {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        return password;
      } catch (err ) {
        
      }
    },
    generateToken: async(payload:{id:string,role:string})=>{
      try {
        const token=jwt.sign(payload,configkey.JWT_KEY,{
          expiresIn:"30m"
        })
        return token  
      } catch (error) {
        console.error("Token generation error:", error);
        throw error;
      }
    },
    generateAdminToken: async(payload:{id:string,role:string})=>{
      try {
        const token=jwt.sign(payload,configkey.JWT_KEY_ADMIN,{
          expiresIn:"30m"
        })
        return token  
      } catch (error) {
        console.error("Token generation error:", error);
        throw error;
      }
    },

    verifyAdminToken: async (token:string)=>{
      try {
        
        return jwt.verify(token,configkey.JWT_KEY_ADMIN)
        
      } catch (error) {
        console.log("Token verification error:", error);
     
        throw error;

      }
    },
    verifyToken: async (token:string)=>{
      try {
        
        return jwt.verify(token,configkey.JWT_KEY)
        
      } catch (error) {
        console.log("Token verification error:", error);
     
        throw error;

      }
    }

}

