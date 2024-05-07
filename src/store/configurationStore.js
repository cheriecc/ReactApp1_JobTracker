import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../slices/jobSlice';
import filterReducer from '../slices/filterSlice';


const store = configureStore({
    reducer: {
        jobs: jobReducer,
        filters: filterReducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store;