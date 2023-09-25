import { createSlice } from "@reduxjs/toolkit";


const initialState={
    WorkerLoggedIn:false
}

const workerAuthSlice = createSlice({
    name:"worker auth",
    initialState,
    reducers:{
      workerLoginReducer:(state)=>{
        state.WorkerLoggedIn=true;
      },
      workerLogoutReducer:(state)=>{
        state.WorkerLoggedIn=false
      }
    }
})

export const {workerLoginReducer,workerLogoutReducer} = workerAuthSlice.actions
export default workerAuthSlice.reducer