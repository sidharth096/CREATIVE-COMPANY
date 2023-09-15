import mongoose from "mongoose";

const designCategoryschema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        unique:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    designCount:{
        type:Number
    }
})

const DesignCategory = mongoose.model("DesignCategory",designCategoryschema)
export default DesignCategory