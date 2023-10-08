import axios from "axios";
import { DesignCategoryInterface } from "../../../types/userInterface";
import { log } from "console";

export const getDesignCategories= async()=>{

    try {
        const response  = await axios({
            method : "get",
            url : "http://localhost:5000/api/design/getAllDesignCategory"  
        })
        
        return response.data

        
    } catch (error:any) {
        throw new Error(error.data.message)
    }
}


export const addDesignCategory = async (designCategoryData:DesignCategoryInterface) => {
    try {
        console.log("2",designCategoryData);
        
      const formData = new FormData();
      formData.append('categoryName', designCategoryData.categoryname);
      if (designCategoryData.img) {
        formData.append('image', designCategoryData.img); 
      }
      
      const response = await axios.post(
        'http://localhost:5000/api/admin/addDesignCategory',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error:any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };