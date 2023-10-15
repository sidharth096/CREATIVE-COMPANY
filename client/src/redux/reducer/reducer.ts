import { combineReducers } from "@reduxjs/toolkit";
import userAuthSlice from "../slice/userSlice/userAuthSlice";
import userTokenSlice from "../slice/userSlice/userTokenSlice";
import workerAuthSlice from "../slice/workerSlice/workerAuthSlice";
import workerTokenSlice from "../slice/workerSlice/workerTokenSlice";
import adminAuthSlice from "../slice/adminSlice/adminAuthSlice";
import adminTokenSlice from "../slice/adminSlice/adminTokenSlice";
import usersDataSlice from "../slice/userSlice/usersDataSlice";
import workersDataSlice from "../slice/workerSlice/workersDataSlice";
import modalSlice from "../slice/adminSlice/modalSlice";
import designCategoriesDataslice from "../slice/designSlice/designCategoriesDataslice";
import designsDataslice from "../slice/designSlice/designsDataslice";
import designCategoryNameslice from "../slice/designSlice/designCategoryNameslice";
import userDataSlice from "../slice/userSlice/userDataSlice";
import workerDataSlice from "../slice/workerSlice/workerDataSlice";


const reducers =combineReducers({
    userAuth:userAuthSlice,
    uerToken:userTokenSlice,
    userData:userDataSlice,
    workerAuth:workerAuthSlice,
    workerToken:workerTokenSlice,
    workerData:workerDataSlice,
    adminAuth:adminAuthSlice,
    adminToken:adminTokenSlice,
    usersData:usersDataSlice,
    workersData:workersDataSlice,
    modal:modalSlice,
    designcategories:designCategoriesDataslice,
    desings:designsDataslice,
    designCategoryName:designCategoryNameslice

})
export type RootState = ReturnType<typeof reducers>;
export default reducers