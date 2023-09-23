import { combineReducers } from "@reduxjs/toolkit";
import userAuthSlice from "../slice/userSlice/userAuthSlice";

const reducers =combineReducers({
    userAuth:userAuthSlice
})

export default reducers