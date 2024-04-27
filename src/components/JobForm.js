import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';

const JobForm = (props) => {

    const originalState = {
        title: props.job ? props.job.title : "",
        deadline: props.job ? props.job.deadline : moment().valueOf(),
        applied: props.job ? props.job.applied : false,
        type: props.job ? props.job.type : "Full time",        
        location: props.job ? props.job.location : "",
        companyName: props.job ? props.job.companyName : "",
        link: props.job ? props.job.link : "",
        description: props.job ? props.job.description : "",
        skills: props.job ? props.job.skills : [],
        calenderFocused: false,
        error: ""
    }

    const [jobState, setJobState] = useState(originalState);

    const handleChange = (e) => {
        e.persist();
        setJobState(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }

    const onDateChange = (deadline) => {
        if (deadline) {
            setJobState(oldState => ({ ...oldState, deadline }))
        }
    }

    const onFocusChange = ({ focused }) => {
        setJobState(oldState => ({ ...oldState, calenderFocused: focused }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
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
                skills: jobState.skills
            })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Job title: </p><input value={jobState.title} name="title" placeholder="Job title" onChange={handleChange}/>
            
            <p>Company name:</p><input value={jobState.companyName} name="companyName" placeholder="Company name" onChange={handleChange}/>

            <p>Job Deadline: </p> 
            <SingleDatePicker 
                date={moment(jobState.deadline)}
                onDateChange={onDateChange}
                focused={jobState.calenderFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />

            <p>Applied: </p> 
            <select name="applied" onChange={handleChange}>
                <option>true</option>
                <option>false</option>
            </select>

            <p>Type: </p>
            <select name="type" onChange={handleChange}>
            <option>Full time</option>
            <option>Part time</option>
            </select>

            <p>Location:</p><input value={jobState.location} name="location" placeholder="Location" onChange={handleChange}/>

            <p>Link:</p><input value={jobState.link} name="link" placeholder="Link" onChange={handleChange}/>

            <p>description:</p><input valuer={jobState.description} name="description" placeholder="Description" onChange={handleChange}/>

            <p>Skills:</p><input value={jobState.skills} name="skills" placeholder="Skills" onChange={handleChange}/>

            <p>Status: </p>
            <select name="status" onChange={handleChange}>
                <option>In process</option>
                <option>Success</option>
                <option>Failed</option>
            </select>

            <button>Save</button>
        </form>
    )
}

export default JobForm;