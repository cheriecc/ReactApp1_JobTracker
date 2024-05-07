import React, { useState } from 'react';
import moment from 'moment';
import { TextField, Autocomplete, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const JobForm = (props) => {

    const originalState = {
        title: props.job ? props.job.title : '',
        deadline: props.job ? props.job.deadline : moment().valueOf(),
        applied: props.job ? props.job.applied : false,
        type: props.job ? props.job.type : 'Full time',        
        location: props.job ? props.job.location : '',
        companyName: props.job ? props.job.companyName : '',
        link: props.job ? props.job.link : '',
        description: props.job ? props.job.description : '',
        skills: props.job ? props.job.skills : [],
        status: props.job ? props.job.status : 'In process',
        error: ''
    }

    const [jobState, setJobState] = useState(originalState);

    const handleChange = (e) => {
        e.persist();
        setJobState(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }

    const handleSelectChange = (event, value) => {
        setJobState(oldState => ({...oldState, [value.id]: value.label}))
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
        if (!jobState.title || !jobState.deadline || !jobState.companyName) {
            setJobState(oldState => ({...oldState, error: 'Please provide job details.'}))
        } else {
            console.log(jobState)
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
    const statuss = ['Success', 'In process', 'Failed']
    const skills = ['SQL', 'MongoDB', 'Firebase', 'Java', 'C#', 'Python', 'JavaScript', 'PHP', 'React']

    return (
        <div>
            {jobState.error !== '' && <p>{jobState.error}</p>}
            <form onSubmit={handleSubmit}>
            
            <p>Job title: </p><input value={jobState.title} name='title' placeholder='Job title' onChange={handleChange}/>
            
            <p>Company name:</p><input value={jobState.companyName} name='companyName' placeholder='Company name' onChange={handleChange}/>

            <p>Job Deadline: </p> 

            <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker value={moment(jobState.deadline)} onChange={handleDateChange}/>
            </LocalizationProvider>

            <p>Applied: </p> 
            <select name='applied' onChange={handleChange}>
                <option>true</option>
                <option>false</option>
            </select>

            <p>Type: </p>
            <Autocomplete
                onChange={handleSelectChange}
                disablePortal
                options={types.map(option => ({label: option, id: 'type'}))}
                sx={{ width: 300 }}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                renderInput={(params) => <TextField {...params} label='Type' placeholder={jobState.type} />}
            />
            
            <p>Location:</p><input value={jobState.location} name='location' placeholder='Location' onChange={handleChange}/>

            <p>Link:</p><input value={jobState.link} name='link' placeholder='Link' onChange={handleChange}/>

            <p>description:</p><textarea valuer={jobState.description} name='description' placeholder='Description' onChange={handleChange}/>

            <p>Skills:</p>
            {skills.map((skill, index) => (
                <Button 
                    key={index}
                    onClick={() => handleSkillChange(skill)}
                    variant={jobState.skills.includes(skill) ? 'contained': 'outlined'}
                >{skill}</Button>
            ))}

            <p>Status: </p>
            <Autocomplete
                onChange={handleSelectChange}
                disablePortal
                options={statuss.map(option => ({label: option, id: 'status'}))}
                sx={{ width: 300 }}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                renderInput={(params) => <TextField {...params} label='Status' placeholder={jobState.status} />}
            />

            <button>Save</button>
        </form>

        </div>
    )
}

export default JobForm;