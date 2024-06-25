import { createSlice } from "@reduxjs/toolkit";

const initialState="Recommended"

const jobFilter =createSlice({
    name:"jobFilter",
    initialState:initialState,
    reducers:{
        handleClickFilter:(state,actions)=>{
        return actions.payload

        }

    }
  
})

export default jobFilter.reducer

export const {handleClickFilter} =jobFilter.actions