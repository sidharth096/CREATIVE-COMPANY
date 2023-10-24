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
    },
    getUserByPhone: async(phone:string)=>{
        
        const isExist = await User.findOne({phone:phone})
        return isExist
    },
    getUserById: async(userId:string)=>{
        const user = await User.findById(userId)
    },
    getAllUsers: async()=>{
        const users = await User.find()
        return users
    },
    blockUnBlock: async(userId:string)=>{
       try {

        const user = await User.findById(userId)
        
         if(user){
            if(user.block==true){
                user.block=false
            } 
            else{
                user.block=true
            }
            await user?.save()
            const users = await User.find()
            return users
         }else{
            throw Error("does not exist the user")
         }
       } catch (error:any) {
          throw Error(error)
       }
    }


}