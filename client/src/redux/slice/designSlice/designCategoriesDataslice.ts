import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface designcategories{
    categoryName:string
    imageUrl:string
    _id:string
}

const initialState={
    designCatagories:null as designcategories[] | null
}

const  designCategoriesSlice = createSlice({
    name:'designcategories',
    initialState,
    reducers:{
        setDesignCategories:(state,action:PayloadAction<designcategories[]>)=>{
            state.designCatagories=action.payload
        }
    }
})

export const {setDesignCategories}=designCategoriesSlice.actions;

export default designCategoriesSlice.reducer;
