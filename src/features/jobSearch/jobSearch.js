import { createSlice } from "@reduxjs/toolkit";
const initialState=''


const jobSearch=createSlice({
    name:"job-search",
    initialState:initialState,
    reducers:{
        handleSearch:(state,action)=>{
            return action.payload
        }
    }
})

export default jobSearch.reducer;

export const {handleSearch}=jobSearch.actions;

