import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Worker {
    id: string;
    name: string;
    email:string;
    phone:string;
}

const loadWorkerFromLocalStorage = ()=>{
  try {
      const getworker = localStorage.getItem("worker")
      return getworker? JSON.parse(getworker):null
  } catch (error) {
      console.log("worker loading error",error);
      return null
  }
}


const initialState = {
  worker: loadWorkerFromLocalStorage()
};



const workerDataSlice = createSlice({
  name: 'userData', 
  initialState,
  reducers: {
    setWorker: (state, action: PayloadAction<Worker>) => {
      state.worker = action.payload;

      try {     
        localStorage.setItem("worker",JSON.stringify(action.payload))
      } catch (error) {
        console.log("Error storing user in localstorage",error);
      }

    },
    clearWorker: (state) => {
      state.worker = null;
      try {
        localStorage.removeItem("worker")
    } catch (error) {
        console.log("Error removing user from localstorage",error);
        
    }
    },
  },
});

export const { setWorker, clearWorker } = workerDataSlice.actions;

export default workerDataSlice.reducer;
 