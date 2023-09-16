import schema from "../../database/mongo/schema";

const {DesignCategory}= schema

export = {
    createDesignCategory: async(design:any)=>{
        
      
        const newDesignCategory = new DesignCategory (design)
        return await newDesignCategory.save()
    },
    getAllDesignCategory: async ()=>{

         const AllDesignCategory = await DesignCategory.find()
         return AllDesignCategory
    }

}