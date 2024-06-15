import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJob, updateJob } from "../slices/jobSlice";
import moment from "moment";
import { Box, Grid, Button, Checkbox, Typography, Dialog, DialogTitle, IconButton, Link } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import CloseRounded from "@mui/icons-material/CloseRounded";


const JobCard = (props) => {

    const job = useSelector(state => state.jobs.find(j => j.id === props.id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [checked, setChecked] = useState(job.saved)

    const onSavedChange = (e) => {
        setChecked(e.target.checked)
        dispatch(updateJob(props.id, {...job, saved: e.target.checked}))
    }


    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Link variant="h5" href={job.link} underline="hover">{job.companyName} - {job.title}</Link>
                <IconButton onClick={props.onClose}> <CloseRounded /> </IconButton>
                </Box>
            </DialogTitle>
            <Box mt={2} px={5} alignItems="center">
                <Typography variant="h5"></Typography>
            </Box>

            <Grid container mt={2} px={5} direction="row-reverse" alignItems="center">
                <Grid item md={4}>
                    <Checkbox checked={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={onSavedChange} inputProps={{ 'aria-label': 'controlled' }} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1">Status: {job.status}</Typography>
                </Grid>
            </Grid>

            <Grid container mt={2} px={5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-between">
                <Grid item md={6}> <Typography variant="body1">Deadline: {moment(job.deadline).format('Do MMM YYYY')}</Typography></Grid>
                <Grid item md={6}><Typography variant="body1">Type: {job.type}</Typography></Grid>
                <Grid item md={6}><Typography variant="body1">Applied: {job.applied ? '√' : '×'}</Typography></Grid>
                <Grid item md={6}><Typography variant="body1">Location: {job.location}</Typography></Grid>
                {/* <Grid item md={6}><Typography variant="body1">Link: <a href={job.link}>{job.title}</a></Typography></Grid> */}

                <Grid item md={6}>{job.applied && <Typography variant="body1">Submitted CV: <a href={job.cvLink}>CV</a></Typography>}</Grid>
            </Grid>

            <Box mt={2} px={5}>
                <Typography variant="body1">Skill set:</Typography>
                <Box display="flex" flexWrap="wrap">
                    {job.skills.map(skill => <Button key={skill} variant='displaying'>{skill}</Button>)}
                </Box>
            </Box>
            <Grid container mt={2} px={5} alignItems="center">
                <Typography>Description: {job.description}</Typography>
            </Grid>

            <Grid container justifyContent="space-between" px={5} my={3}>
                <Button variant='outlined' onClick={() => navigate(`/edit/${props.id}`)}>Edit</Button>
                <Button variant='outlined' onClick={() => {
                    dispatch(removeJob(props.id))
                    navigate('/jobboard')
                    }}>Delete</Button>
            </Grid>   
        </Dialog>
    )
}

export default JobCard