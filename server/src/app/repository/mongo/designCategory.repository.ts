import schema from "../../database/mongo/schema";

const {DesignCategory}= schema

export = {
    createDesignCategory: async(design:any)=>{
        console.log("repo");
        console.log(design);
        
        
        const newDesignCategory = new DesignCategory (design)
        return await newDesignCategory.save()
    }
}