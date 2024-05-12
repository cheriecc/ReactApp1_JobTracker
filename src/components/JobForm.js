import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { Box, Grid, TextField, Button, Typography, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const JobForm = (props) => {

    const navigate = useNavigate()

    const originalState = {
        title: props.job ? props.job.title : '',
        deadline: props.job ? props.job.deadline : moment().valueOf(),
        applied: props.job ? props.job.applied : false,
        type: props.job ? props.job.type : '',        
        location: props.job ? props.job.location : '',
        companyName: props.job ? props.job.companyName : '',
        link: props.job ? props.job.link : '',
        description: props.job ? props.job.description : '',
        skills: props.job ? props.job.skills : [],
        status: props.job ? props.job.status : 'In Progress',
        error: ''
    }

    const [jobState, setJobState] = useState(originalState);

    const handleChange = (e) => {
        e.persist();
        setJobState(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }

    const handleSelectChange = (e) => {
        setJobState(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }

    const handleDateChange = (deadline) => {
        if (deadline) {
            setJobState(oldState => ({ ...oldState, deadline }))
        }
    }

    const handleSkillChange = (skill) => {
        jobState.skills.includes(skill) ?
        setJobState(oldState => ({...oldState, skills: oldState.skills.filter(s => s !== skill)})) :
        setJobState(oldState => ({...oldState, skills: oldState.skills.concat(skill)}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(jobState)
        if (!jobState.title || !jobState.deadline || !jobState.companyName) {
            setJobState(oldState => ({...oldState, error: 'Please provide job details.'}))
        } else {
            props.onSubmit({
                title: jobState.title,
                deadline: jobState.deadline.valueOf(),
                applied: jobState.applied,
                type: jobState.type,
                location: jobState.location,
                companyName: jobState.companyName,
                link: jobState.link,
                description: jobState.description,
                skills: jobState.skills,
                status: jobState.status
            })
        }
    }

    const types = ['Full time', 'Part time', 'Contract']
    const statuss = ['Success', 'In Progress', 'Failed']
    const skills = ['C++', 'Java', 'C#', 'Python', 'JavaScript', 'PHP', 'React', 'Django', 'Vue', 'SQL', 'MongoDB', 'Firebase']

    return (
        <Box component="form">
            {jobState.error !== '' && <Typography variant='caption'>{jobState.error}</Typography>}

            <Grid container display="flex" justifyContent="center" spacing={2} columnSpacing={2}>

                <Grid item md={10} container display="flex" justifyContent="space-evenly" spacing={2}>
                    <Grid item xs={6} md={4}>
                    <TextField required sx={{ minWidth: 250 }} label="Company name" name="companyName" value={jobState.companyName} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <TextField required sx={{ minWidth: 250 }} label="Job title" name="title" value={jobState.title} onChange={handleChange}/>
                    </Grid>
                </Grid>

                <Grid item md={10} container display="flex" justifyContent="space-evenly" spacing={2}>
                    <Grid item xs={6} md={4}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker sx={{ minWidth: 250 }} label="Job deadline" value={moment(jobState.deadline)} onChange={handleDateChange}/>
                        </LocalizationProvider>                    
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormControl sx={{ minWidth: 250 }}>
                            <InputLabel>Type</InputLabel>
                            <Select value={jobState.type} label="Type" name="type" onChange={handleSelectChange}>
                                {types.map((t => <MenuItem key={t} value={t}>{t}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid item md={10} container display="flex" justifyContent="space-evenly" spacing={2}>
                    <Grid item xs={6} md={4}>
                        <TextField sx={{ minWidth: 250 }} label="Location" name='location' value={jobState.location} onChange={handleChange}/>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <TextField sx={{ minWidth: 250 }} label="Link" name='link' value={jobState.link} onChange={handleChange}/>
                    </Grid>

                </Grid>

                <Grid item md={8} container direction="column" px={2}>
                    <Typography variant="body1">Skill set:</Typography>
                    <Box display="flex" flexWrap="wrap" spacing={1}>
                        {skills.map((skill, index) => (
                            <Button
                                mr={1}
                                key={index}
                                onClick={() => handleSkillChange(skill)}
                                variant={jobState.skills.includes(skill) ? 'selected': 'unselect'}
                            >{skill}</Button>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <TextField fullWidth multiline label="Description" name='description' value={jobState.description} onChange={handleChange}/>
                </Grid>

            <Grid item md={10} container display="flex" justifyContent="space-evenly" spacing={2}>
                <Grid item xs={6} md={4}>
                    <FormControl sx={{ minWidth: 250 }}>
                        <InputLabel>Applied or not</InputLabel>
                        <Select value={jobState.applied} label="Applied or not" name="applied" onChange={handleSelectChange}>
                            <MenuItem value={true}>Y</MenuItem>
                            <MenuItem value={false}>N</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={4}>
                    {jobState.applied && (<FormControl sx={{ minWidth: 250 }}>
                    <InputLabel>Status</InputLabel>
                    <Select value={jobState.status} label="Status" name="status" onChange={handleSelectChange}>
                        {statuss.map((s => <MenuItem key={s} value={s}>{s}</MenuItem>))}
                    </Select>
                    </FormControl>)}
                </Grid>
            </Grid>

            {jobState.applied && (<Grid item xs={12} md={8}>
                <TextField fullWidth label="CV Link" name='cvLink' value={jobState.cvLink} onChange={handleChange}/>
            </Grid>)}

            </Grid>
            <Box display="flex" justifyContent="space-evenly" mt={2}>
                <Button variant="outlined" onClick={() => navigate("/jobboard")}>Exit</Button>
                <Button variant="outlined" onClick={handleSubmit}>Save</Button>
            </Box>

        </Box>
    )
}

export default JobForm;