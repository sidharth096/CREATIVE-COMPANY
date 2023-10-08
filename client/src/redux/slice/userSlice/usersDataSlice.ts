import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface User {

    id: number;
    name: string;

}

const initialState = {
  users: null as User[] | null, // Initialize `users` as an array of User or null.
};

const usersDataSlice = createSlice({
  name: 'usersData', // Corrected name
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = null;
    },
  },
});

export const { setUsers, clearUsers } = usersDataSlice.actions;

export default usersDataSlice.reducer;
 