import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from '@mui/material';
import JobForm from "./JobForm";
import { addNewJob } from "../slices/jobSlice";
import moment from 'moment';


const AddJobPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center" rowSpacing={2}>
                <Grid item mt={3}>
                    <Typography variant="h4">Track a New Job</Typography>
                </Grid>
                <Grid item>
                    <JobForm onSubmit={(newJob) => {
                        dispatch(addNewJob({...newJob, createAt: moment().valueOf(), updates: [], saved: false}))
                        navigate('/jobboard')
                    }}
                />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddJobPage