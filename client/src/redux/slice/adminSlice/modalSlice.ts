import { createSlice } from '@reduxjs/toolkit';



const initialState= {
  modal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpenReducer: (state) => {
      state.modal = true;
    },
    modalCloseReducer: (state) => {
      state.modal = false;
    },
  },
});

export const { modalOpenReducer, modalCloseReducer } = modalSlice.actions;
export default modalSlice.reducer;