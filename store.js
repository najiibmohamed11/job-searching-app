import { configureStore } from "@reduxjs/toolkit";
 
import jobFilterReducer from "./src/features/JobFilter/jobFilter"

export const store=configureStore({
    reducer:{
        filter:jobFilterReducer
    }
})