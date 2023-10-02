import mongoose from "mongoose";


const workerschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    },
    block:{
        type:Boolean,
        default:false

    }
})

const Worker = mongoose.model("Worker",workerschema)

export default Worker
