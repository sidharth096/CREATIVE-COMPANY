import axios from "axios";
import { DesignCategoryInterface,DesignInterface } from "../../../types/designInterface";

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

  export const addDesign =async (design:DesignInterface)=>{
    try {
      
      console.log(design);
      const formData = new FormData();
      formData.append('categoryId',design.categoryId)
      
      if(design.img){
        formData.append('image',design.img)
      }

      const response = await axios.post(
        'http://localhost:5000/api/admin/addDesign',
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

  export const getDesign = async()=>{
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/design/getAllDesign'
      })
      return response.data
    } catch (error:any) {
      throw new Error(error.data.message)
    }
  };

  export const getDesignByCategory = async(categoryId:string):Promise<any>=>{
    try {
      console.log("222",categoryId);
      
      const response = await axios({
        method: 'patch',
        url: 'http://localhost:5000/api/design/getDesignByCategory',
        data: {categoryId}
      })
      return response.data
    } catch (error:any) {
      throw new Error(error.data.message)
    }
  }