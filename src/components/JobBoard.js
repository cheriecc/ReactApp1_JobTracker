import React from "react";
import JobFilter from "./JobFilter";
import getDisplayJobs from "../selectors/jobs";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import { Table, Container, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import JobRow from "./JobRow";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontSize: 18
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
}));

const JobBoard = () => {

    const jobs = useSelector(state => getDisplayJobs(state.jobs, state.filters))
   
    return (
      <Container maxWidth="lg">
            <JobFilter />
            {jobs.length === 0 && (<Typography variant="h5" align="center">No job added</Typography>)}

            {jobs.length !== 0 && (<TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <TableCell />
                    <StyledTableCell>Company Name</StyledTableCell>
                    <StyledTableCell>Job Title</StyledTableCell>
                    <StyledTableCell>Type</StyledTableCell>
                    <StyledTableCell>Deadline</StyledTableCell>
                    <StyledTableCell>Progress</StyledTableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                {jobs?.map((job) => (
                  <JobRow key={job.id} jobDetails={job} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>)}
        </Container>
    )
}

export default JobBoard;