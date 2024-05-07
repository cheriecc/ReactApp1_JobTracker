import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobForm from "./JobForm";
import { addNewJob } from "../slices/jobSlice";
import moment from 'moment';


const AddJobPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Track a new job</h1>
            <JobForm onSubmit={(newJob) => {
                dispatch(addNewJob({...newJob, createAt: moment().valueOf()}))
                navigate('/jobboard')
            }}
            />
        </div>
    )
}

export default AddJobPage