import axios from "axios";

export const getDesignCategories= async()=>{

    try {
        const response  = await axios({
            method : "get",
            url : "http://localhost:5000/api/design/getAllDesignCategory"  
        })
        
        return response.data

        
    } catch (error) {
        
    }
}