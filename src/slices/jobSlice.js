import { createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";


const jobSlice = createSlice({
    name: 'jobs',
    initialState: [],
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
    const jobsData = await getDocs(collection(db, `users/${auth.currentUser.uid}/jobs`))
    const jobs = []
    jobsData.forEach(doc => jobs.push({id: doc.id, ...doc.data()}));
    dispatch(setJobs(jobs))
}

export const addNewJob =  (newJob) => async (dispatch) => {
    const newJobAdded = await addDoc(collection(db, `users/${auth.currentUser.uid}/jobs`), newJob)
    dispatch(addJob({id: newJobAdded.id, ...newJob}))
}

export const updateJob = (id, jobUpdate) => async (dispatch) => {
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id), jobUpdate)
    dispatch(editJob({id, jobUpdate}))
}

export const addJobProgress = (id, update) => async (dispatch) => {
    const selectedJob = await getDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id))
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id), {updates: arrayUnion(update)})
    console.log(`empty update: ${selectedJob.data().updates}`)
    dispatch(editJob({id, updates: selectedJob.data().updates.concat(update)}));
}

export const removeJobProgress = (id, updateDate) => async (dispatch) => {
    const selectedJob = await getDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id))
    const seletedProgress = await selectedJob.data().updates.find((progress) => progress.date === updateDate)
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id), {updates: arrayRemove(seletedProgress)})
    dispatch(editJob({id, updates: selectedJob.data().updates.splice(selectedJob.data().updates.indexOf(seletedProgress),1)}));
}

export const removeJob = (id) => async (dispatch) => {
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/jobs`, id))
    dispatch(deleteJob({ id }))
}

export const { setJobs, addJob, editJob, deleteJob } = jobSlice.actions

export default jobSlice.reducer;