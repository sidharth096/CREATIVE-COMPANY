import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Interface } from "readline";


const loadadminTokenFromLocalStorage = ()=>{
    try {
        const getToken = localStorage.getItem("admintoken")
        return getToken? getToken:null
    } catch (error) {
        console.log("Token loading error",error);
        return null
    }
}


interface tokenState {
   token : string | null
}

const initialState ={
    adminToken :loadadminTokenFromLocalStorage()
}

const userTokenSlice = createSlice({
    name:'admintoken slice',
    initialState,
    reducers:{
        setAdminToken:(state,action:PayloadAction<string>)=>{
            state.adminToken=action.payload;
            try {
                localStorage.setItem("admintoken",action.payload)
            } catch (error) {
                console.log("Error storing token in localstorage",error);
                
            }
        },
        clearAdminToken:(state)=>{
            state.adminToken=null
            try {
                localStorage.removeItem("admintoken")
            } catch (error) {
                console.log("Error removing token from localstorage",error);
                
            }
        }
    }
})

export const {setAdminToken,clearAdminToken}=userTokenSlice.actions
export default userTokenSlice.reducer
