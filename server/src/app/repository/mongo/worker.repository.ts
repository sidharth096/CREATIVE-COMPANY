import mongoose from "mongoose";
import schema from "../../database/mongo/schema";

const {Worker} = schema

export ={
    createWorker : async(worker:any)=>{
        const newWorker = new Worker(worker)
        return await newWorker.save()
    },
    getWorkerByEmail : async(email:string)=>{
        const isWorkerExist = await Worker.findOne({email})
        return isWorkerExist
    },
    getWorkerByPhone : async(phone:string)=>{
        const isWorkerExist = await Worker.findOne({phone})
        return isWorkerExist
    },
    getAllWorkers : async()=>{
        const workers = await Worker.find()
        return workers
    },
    blockUnBlockWorker: async(userId:string)=>{
        try {
 
         const worker = await Worker.findById(userId)
         
          if(worker){
             if(worker.block==true){
                worker.block=false
             } 
             else{
                worker.block=true
             }
             await worker?.save()
             const workers = await Worker.find()
             return workers
          }else{
             throw Error("does not exist the user")
          }
        } catch (error:any) {
           throw Error(error)
        }
     }
}