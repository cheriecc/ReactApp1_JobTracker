import { createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const initialState = [];

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => state.concat(action.payload),
        addJob: (state, action) => [...state, action.payload],
        editJob: (state, action) => {
            return state.map((job) => {
                if (job.id === action.payload.id) {
                    return {  ...job, ...action.payload.jobUpdate }
                } else {
                    return job
                }
            })
        },
        deleteJob: (state, action) => state.filter(({id}) => id !== action.payload.id)
    }
})

export const getAllJobs = () => async (dispatch) => {
    const jobsData = await getDocs(collection(db, 'jobs'))
    const jobs = []
    jobsData.forEach(doc => {
        jobs.push({id: doc.id, ...doc.data()})
    });
    dispatch(setJobs(jobs))
    return Promise.resolve()
}

export const addNewJob =  (newJob) => async (dispatch) => {
    const newJobAdded = await addDoc(collection(db, 'jobs'), newJob)
    dispatch(addJob({id: newJobAdded.id, ...newJob}))
}

export const updateJob = (id, jobUpdate) => async (dispatch) => {
    await updateDoc(doc(db, 'jobs', id), jobUpdate)
    console.log(id, 'job has been updated')
    console.log('update info', jobUpdate)
    dispatch(editJob({id, jobUpdate}))
}

export const removeJob = (id) => async (dispatch) => {
    await deleteDoc(doc(db, 'jobs', id))
    dispatch(deleteJob({ id }))
}

export const { setJobs, addJob, editJob, deleteJob } = jobSlice.actions

export default jobSlice.reducer;