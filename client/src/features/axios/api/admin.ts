import axios from "axios";
import { loginInterface } from "../../../types/userInterface";

export const adminLogin = async (adminData:loginInterface):Promise<any>=>{
    try {
        const response = await axios ({
            method : 'post',
            url : 'http://localhost:5000/api/admin/adminLogin',
            data : adminData
        })
        return response.data
    } catch (error:any) {
        throw new Error(error.response.data.message)
    }
}