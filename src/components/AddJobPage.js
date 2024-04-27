import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobForm from "./JobForm";
import { addNewJob } from "../actions/jobs";

const AddJobPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Track a new job</h1>
            <JobForm onSubmit={(newJob) => {
                dispatch(addNewJob(newJob))
                navigate('/jobboard')
            }}
            />
        </div>
    )
}

export default AddJobPage