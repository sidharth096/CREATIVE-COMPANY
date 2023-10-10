import mongoose from "mongoose";

const designschema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    categoryId:{
        type:String,

    }
})

const Design = mongoose.model("Design",designschema)

export default Design