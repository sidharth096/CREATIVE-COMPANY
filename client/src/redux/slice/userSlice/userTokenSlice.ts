import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const loadTokenFromLocalStorage = ()=>{
    try {
        const getToken = localStorage.getItem("token")
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
    token :loadTokenFromLocalStorage()
}

const userTokenSlice = createSlice({
    name:'token slice',
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string>)=>{
            state.token=action.payload;
            try {
                console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb");
                localStorage.setItem("token",action.payload)
            } catch (error) {
                console.log("Error storing token in localstorage",error);
                
            }
        },
        clearToken:(state)=>{
            state.token=null
            try {
                localStorage.removeItem("token")
            } catch (error) {
                console.log("Error removing token from localstorage",error);
                
            }
        }
    }
})

export const {setToken,clearToken}=userTokenSlice.actions
export default userTokenSlice.reducer
