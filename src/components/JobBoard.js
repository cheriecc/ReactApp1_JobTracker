import React from "react";
import JobFilter from "./JobFilter";
import { useSelector } from "react-redux";
import JobItem from "./JobItem";


const JobBoard = () => {

    const jobs = useSelector(state => state.jobs)

    return (
        <div>
            <JobFilter />
            <p>This is a page of jobs</p>
            {jobs.length === 0 && (<p>No job added</p>)}
            {jobs.map((job) => <JobItem key={job.id} {...job} />)}
        </div>
    )
}

export default JobBoard;