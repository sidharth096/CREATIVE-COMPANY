import { PayloadAction,createSlice } from "@reduxjs/toolkit";



const initialState={
    designcategoryName:""
}

const  designCategoryNameSlice = createSlice({
    name:'designcategories',
    initialState,
    reducers:{
        setdesigncategoryName:(state,action:PayloadAction<string>)=>{
            state.designcategoryName=action.payload
        }
    }
})

export const {setdesigncategoryName}=designCategoryNameSlice.actions;

export default designCategoryNameSlice.reducer;
