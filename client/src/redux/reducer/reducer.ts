import { combineReducers } from "@reduxjs/toolkit";
import userAuthSlice from "../slice/userSlice/userAuthSlice";
import userTokenSlice from "../slice/userSlice/userTokenSlice";
import workerAuthSlice from "../slice/workerSlice/workerAuthSlice";
import workerTokenSlice from "../slice/workerSlice/workerTokenSlice";
import adminAuthSlice from "../slice/adminSlice/adminAuthSlice";
import adminTokenSlice from "../slice/adminSlice/adminTokenSlice";
import usersDataSlice from "../slice/userSlice/usersDataSlice";
import workersDataSlice from "../slice/workerSlice/workersDataSlice";


const reducers =combineReducers({
    userAuth:userAuthSlice,
    uerToken:userTokenSlice,
    workerAuth:workerAuthSlice,
    workerToken:workerTokenSlice,
    adminAuth:adminAuthSlice,
    adminToken:adminTokenSlice,
    usersData:usersDataSlice,
    workersData:workersDataSlice
})
export type RootState = ReturnType<typeof reducers>;
export default reducers