import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => [...state, action.payload],
        editJob: (state, action) => {
            return state.map((job) => {
                if (job.id === action.payload.id) {
                    return {...job, ...action.payload.jobUpdate}
                } else {
                    return job
                }
            })
        },
        deleteJob: (state, action) => state.filter(({id}) => id !== action.payload.id)
    }
})


export const { addJob, editJob, deleteJob } = jobSlice.actions

export default jobSlice.reducer;