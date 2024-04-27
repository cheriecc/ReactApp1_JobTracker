import { addJob, editJob, deleteJob } from '../slices/jobSlice';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import store from '../store/configurationStore';


const getAllJobs = async () => {
    const jobData = await getDocs(collection(db, 'jobs'))
    jobData.forEach(doc => {
    store.dispatch(addJob({id:doc.id, ...doc.data()}))
    });
}

const addNewJob =  (newJob) => {
    return async () => {
        const newJobAdded = await addDoc(collection(db, 'jobs'), newJob)
        store.dispatch(addJob({id: newJobAdded.id, ...newJob}))    
    }
}

const updateJob = (id, jobUpdate) => {
    return async () => {
        await updateDoc(doc(db, 'jobs', id), jobUpdate)
        store.dispatch(editJob(id, jobUpdate))  
    }
}

const removeJob = async (id) => {
    return async () => {
        await deleteDoc(doc(db, 'jobs', id))
        store.dispatch(deleteJob)    
    }
}

export { getAllJobs, addNewJob, updateJob, removeJob}