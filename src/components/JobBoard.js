import React from "react";
import JobFilter from "./JobFilter";
import getDisplayJobs from "../selectors/jobs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Table, Button, Container, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Collapse } from '@mui/material';
import moment from "moment";
import JobRow from "./JobRow";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const JobBoard = () => {

    const jobs = useSelector(state => getDisplayJobs(state.jobs, state.filters))
   
    return (
      <Container maxWidth="lg">
            <JobFilter />
            {jobs.length === 0 && (<p>No job added</p>)}

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <TableCell />
                    <StyledTableCell>Company Name</StyledTableCell>
                    <StyledTableCell>Job Title</StyledTableCell>
                    <StyledTableCell>Company</StyledTableCell>
                    <StyledTableCell>Deadline</StyledTableCell>
                    <StyledTableCell>Process</StyledTableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                {jobs?.map((job) => (
                  <JobRow key={job.id} jobDetails={job} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    )
}

export default JobBoard;