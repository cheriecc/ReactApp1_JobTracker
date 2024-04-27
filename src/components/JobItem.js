import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";


// const initJobState = {
//     title: "",  // string
//     deadline: new moment(),  // timestamp
//     applied: false, // boolean
//     type: "Full time",  // string
//     location: "Remote",  // string
//     companyName: "",  // string
//     link: "",  // string
//     description: "",  // string
//     skills: [],  //  array
// }

const JobItem = ({ id, title, deadline, type, companyName, skills }) => {
    return (
        <div>
            <p>Job title: {title}</p>
            <p>Job Deadline: {moment(deadline).format('MMM Do, YYYY')}</p>
            <p>Type: {type}</p>
            <p>Company name: {companyName}</p>
            <p>Skills: {skills}</p>
            <Link to={`/jobs/${id}`}>Details</Link>
        </div>
    )
}

export default JobItem;