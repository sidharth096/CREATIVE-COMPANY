
import schema from "../../database/mongo/schema";

const{Admin}= schema

export ={
    getAdminByEmail:async(email:string)=>{
        
        const isAdmin= await Admin.findOne({email})
        return isAdmin
    }

}