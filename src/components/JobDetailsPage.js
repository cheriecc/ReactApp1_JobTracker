import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { removeJob } from "../actions/jobs";
import moment from "moment";

const JobDetailsPage = () => {

    const { id } = useParams()
    const job = useSelector(state => state.jobs.find(j => j.id === id))
    const dispatch = useDispatch()

    return (
    <div>
        <h1>Track my job application</h1>
        <p>{job.companyName} - {job.title}</p>
        <p>deadline: {moment(job.deadline).format('MMM Do, YYYY')}</p>
        <a href={job.link}>Link</a>
        <p>type: {job.type}</p>
        <p>location: {job.location}</p>
        <p>applied: {job.applied ? '√' : '×'}</p>
        <p>description: {job.description}</p>
        {job.skills.map(skill => <button>{skill}</button>)}
        <p>Status: {job.status}</p>
        <Link to={`/edit/${id}`}>Update status</Link>
        <button onClick={() => dispatch(removeJob(id))}>Delete job</button>
    </div>
    )
}

export default JobDetailsPage