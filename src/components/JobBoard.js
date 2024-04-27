import React from "react";
import JobFilter from "./JobFilter";
import { useDispatch, useSelector } from "react-redux";
import JobItem from "./JobItem";


const JobBoard = () => {

    const jobs = useSelector(state => state.jobs)
    const dispatch = useDispatch()

    console.log(jobs)

    return (
        <div>
            <JobFilter />
            <p>This is a page of jobs</p>
            {jobs.map((job) => <JobItem key={job.id} {...job} />)}
        </div>
    )
}

export default JobBoard;