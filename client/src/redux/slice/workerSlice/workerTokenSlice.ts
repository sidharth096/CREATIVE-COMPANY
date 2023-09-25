import { PayloadAction,createSlice } from "@reduxjs/toolkit";

const loadWorkerTokenFromLocalStorage =()=>{
    try {
        const token =localStorage.getItem("workerToken")
        return token
    } catch (error) {
        console.log("WorkerToken loading error",error);
        return  
        
    }
}

const initialState ={
    workerToken : loadWorkerTokenFromLocalStorage()
}

const workerTokenSlice = createSlice({
    name:'Workertoken slice',
    initialState,
    reducers:{
        setWorkerToken:(state,action:PayloadAction<string>)=>{
            state.workerToken=action.payload;
            try {
                localStorage.setItem("workertoken",action.payload)
            } catch (error) {
                console.log("Error storing token in localstorage",error);
                
            }
        },
        clearWorkerToken:(state)=>{
            state.workerToken=null
            try {
                localStorage.removeItem("workertoken")
            } catch (error) {
                console.log("Error removin token from localstorage",error);
                
            }
        }
    }
})

export const {setWorkerToken,clearWorkerToken}=workerTokenSlice.actions
export default workerTokenSlice.reducer
