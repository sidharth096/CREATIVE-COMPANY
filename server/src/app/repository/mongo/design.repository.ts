import schema from "../../database/mongo/schema";

const {Design} = schema

export ={
    createDesign: async(design:any)=>{
        
        const newDesign = new Design (design)
        return await newDesign.save()
    },
    getAllDesign: async ()=>{

         const AllDesign = await Design.find()
         return AllDesign
    },
    getDesignByCategoryId: async (Id:string)=>{
        
        const designs = await Design.find({categoryId:Id})
        return designs
    }
}

