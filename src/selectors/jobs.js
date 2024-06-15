const getDisplayJobs = (jobs, { savedOnly, appliedOnly, text, sortBy }) => {
    return jobs.filter((job) => {
        const savedMatch = savedOnly ? (job.saved === true) : true;
        const appliedMatch = appliedOnly ? (job.applied === true) : true;
        const textMatch = (job.title.concat(job.companyName)).toLowerCase().includes(text.toLowerCase())
        
        return savedMatch && appliedMatch && textMatch
    }).sort((a, b) => sortBy === 'deadline' ? a.deadline - b.deadline : a.createAt - b.createAt)
}

export default getDisplayJobs