import mongoose from "mongoose";
import schema from "../../database/mongo/schema";

const {User}=schema

export ={
    
    createUser: async(user:any)=>{
        const newUser = new User(user);
         
          return await newUser.save()
    } ,
    getUserByEmail: async(email:string)=>{
        
        const isExist = await User.findOne({email:email})
        return isExist
    }
}