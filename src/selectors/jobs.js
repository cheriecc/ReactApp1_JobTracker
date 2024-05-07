const getDisplayJobs = (jobs, { trackingOnly, appliedOnly, text, sortBy }) => {
    return jobs.filter((job) => {
        const trackingMatch = trackingOnly ? (job.tracking === true) : true;
        const appliedMatch = appliedOnly ? (job.applied === true) : true;
        const textMatch = (job.title.concat(job.companyName)).toLowerCase().includes(text.toLowerCase())
        
        return trackingMatch && appliedMatch && textMatch
    }).sort((a, b) => sortBy === 'deadline' ? a.deadline - b.deadline : a.createAt - b.createAt)
}

export default getDisplayJobs