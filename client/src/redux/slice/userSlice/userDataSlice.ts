import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface User {
    id: string;
    name: string;
    email:string;
    phone:string;
}

const loadUserFromLocalStorage = ()=>{
  try {
      const getuser = localStorage.getItem("user")
      return getuser? JSON.parse(getuser):null
  } catch (error) {
      console.log("user loading error",error);
      return null
  }
}

// interface UserState {
//     user: User | null;
//   }

const initialState = {
  user: loadUserFromLocalStorage()
};



const userDataSlice = createSlice({
  name: 'userData', 
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;

      try {     
        localStorage.setItem("user",JSON.stringify(action.payload))
      } catch (error) {
        console.log("Error storing user in localstorage",error);
      }

    },
    clearUser: (state) => {
      state.user = null;
      try {
        localStorage.removeItem("user")
    } catch (error) {
        console.log("Error removing user from localstorage",error);
        
    }
    },
  },
});

export const { setUser, clearUser } = userDataSlice.actions;

export default userDataSlice.reducer;
 