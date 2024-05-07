import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    trackingOnly: false,  // init state: all jobs whether it's tracked or not
    appliedOnly: false,
    text: '',
    sortBy: 'deadline',
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        displayTrackOnly: (state, action) => { 
            return { ...state, trackingOnly: action.payload }
        },
        displayAppliedOnly: (state, action) => {
            return { ...state, appliedOnly: action.payload }
        },
        sortByInput: (state, action) => {
            return { ...state, sortBy: action.payload}
        },
        setTextFilter: (state, action) => {
            return { ...state, text: action.payload }
        }
    }
})

export const { displayTrackOnly, displayAppliedOnly, sortByInput, setTextFilter} = filterSlice.actions

export default filterSlice.reducer;