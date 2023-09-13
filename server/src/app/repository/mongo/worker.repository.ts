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
    }
}