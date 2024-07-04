import { configureStore } from "@reduxjs/toolkit";
 
import jobFilterReducer from "./src/features/JobFilter/jobFilter"
import jobSearchReducer from "./src/features/jobSearch/jobSearch";

export const store=configureStore({
    reducer:{
        filter:jobFilterReducer,
        jobSearch:jobSearchReducer
    }
})