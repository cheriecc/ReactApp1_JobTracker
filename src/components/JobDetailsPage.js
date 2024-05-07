import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { removeJob, updateJob } from "../slices/jobSlice";
import moment from "moment";
import { Switch, Button } from '@mui/material';


// Pending to update
const JobDetailsPage = () => {

    const { id } = useParams()
    const job = useSelector(state => state.jobs.find(j => j.id === id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [checked, setChecked] = useState(job.tracking)

    const onTrackingChange = (e) => {
        setChecked(e.target.checked)
        dispatch(updateJob(id, {...job, tracking: e.target.checked}))
    }

    return (
    <div>
        <h1>{job.companyName} - {job.title}</h1>
        <Switch checked={checked} onChange={onTrackingChange} inputProps={{ 'aria-label': 'controlled' }} />
        <p>Deadline: {moment(job.deadline).format('MMM Do, YYYY')}</p>
        <p>Link: <a href={job.link}>{job.companyName} - {job.title}</a></p>
        <p>Type: {job.type}</p>
        <p>Location: {job.location}</p>
        <p>Applied: {job.applied ? '√' : '×'}</p>
        {job.applied && <p>submitted CV: <a href={job.link}>CV</a></p>}
        <p>Description: {job.description}</p>
        <p>Skills:</p>
        {job.skills.map(skill => <Button key={skill} variant='contained'>{skill}</Button>)}
        <p>Status: {job.status}</p>
        <Button variant='outlined'><Link to={`/edit/${id}`}>Update status</Link></Button>
        
        <Button variant='outlined' onClick={() => {
            dispatch(removeJob(id))
            navigate('/jobboard')
            }}>Delete job</Button>
    </div>
    )
}

export default JobDetailsPage