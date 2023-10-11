import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface designs{
    imageUrl:string
    categoryId:string
}

const initialState={
    designs:null as designs[] | null
}

const  designSlice = createSlice({
    name:'designs',
    initialState,
    reducers:{
        setDesigns:(state,action:PayloadAction<designs[]>)=>{
            state.designs=action.payload
        }
    }
})

export const {setDesigns}=designSlice.actions;

export default designSlice.reducer;
