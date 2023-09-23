import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  loggedIn: boolean;
}

const initialState: CounterState = {
  loggedIn: false,
};

const userAuthSlice = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
