import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Grid, Typography } from '@mui/material';
import JobForm from "./JobForm";
import { updateJob } from "../slices/jobSlice";


const EditJobPage = () => {

    const { id } = useParams();
    const job = useSelector(state => state.jobs.find(j => j.id === id));
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
            <Typography variant="h4">Edit Job Details</Typography>
            <JobForm 
                key={id} job={job}
                onSubmit={(jobUpdate) => {
                    console.log(jobUpdate)
                    dispatch(updateJob(id, jobUpdate))
                    navigate('/jobboard')
                }}
            />
            </Grid>
        </Container>
    )
}

export default EditJobPage;