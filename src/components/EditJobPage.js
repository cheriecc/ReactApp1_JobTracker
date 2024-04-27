import React from "react";
import JobForm from "./JobForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateJob } from "../actions/jobs";


const EditJobPage = () => {

    const { id } = useParams();
    const job = useSelector((state) => state.jobs.find(j => j.id === id));
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Edit Expense</h1>
            <JobForm 
                key={id} job={job}
                onSubmit={(jobUpdate) => {
                    dispatch(updateJob(id, jobUpdate))
                    navigate('/jobboard')
                }}
            
            />
        </div>
    )
}

export default EditJobPage;