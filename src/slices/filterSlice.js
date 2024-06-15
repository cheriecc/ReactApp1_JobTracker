import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    savedOnly: false,  // init state: all jobs whether it's savsed or not
    appliedOnly: false,
    text: '',
    sortBy: 'deadline',
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        displaySavedOnly: (state, action) => { 
            return { ...state, savedOnly: action.payload }
        },
        displayAppliedOnly: (state, action) => {
            return { ...state, appliedOnly: action.payload }
        },
        sortByInput: (state, action) => {
            return { ...state, sortBy: action.payload }
        },
        setTextFilter: (state, action) => {
            return { ...state, text: action.payload }
        }
    }
})

export const { displaySavedOnly, displayAppliedOnly, sortByInput, setTextFilter} = filterSlice.actions

export default filterSlice.reducer;