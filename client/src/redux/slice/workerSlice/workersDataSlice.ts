import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Worker {

    id: number;
  name: string;

}

const initialState = {
  workers: null as Worker[] | null, 
};

const workersDataSlice = createSlice({
  name: 'usersData', // Corrected name
  initialState,
  reducers: {
    setWorkers: (state, action: PayloadAction<Worker[]>) => {
      state.workers = action.payload;
    },
    clearWorkers: (state) => {
      state.workers = null;
    },
  },
});

export const { setWorkers, clearWorkers } = workersDataSlice.actions;

export default workersDataSlice.reducer;
 