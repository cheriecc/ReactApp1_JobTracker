import React, { useState, Fragment } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, IconButton, Table, TableRow, TableHead, TableBody, TableCell, Collapse, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { addJobProgress, removeJobProgress } from '../slices/jobSlice';
import JobProgressCard from './JobProgressCard';
import JobCard from "./JobCard";
import moment from 'moment';


const JobRow = (props) => {

  const initstate = {
    open: false,
    jobCardOpen: false,
    dialogOpen: false,
    progress: {
      date: moment().valueOf(),
      note: ''
    },
    operation: 'add'
  }
  const [allState, setAllState] = useState(initstate)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {allState.jobCardOpen && <JobCard id={props.jobDetails.id} open={allState.jobCardOpen} onClose={()=> setAllState((oldState => ({...oldState, jobCardOpen: false})))}/>}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setAllState(oldState => ({...oldState, open: !oldState.open}))}
          >
            {allState.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{props.jobDetails.companyName}</TableCell>
        <TableCell>{props.jobDetails.title}</TableCell>
        <TableCell>{props.jobDetails.type}</TableCell>
        <TableCell>{moment(props.jobDetails.deadline).format('MMM Do, YYYY')}</TableCell>
        <TableCell>{props.jobDetails.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={allState.open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6" gutterBottom component="div">Progress</Typography>
                </Grid>
                <Grid item>
                  <Button variant='contained' onClick={()=> setAllState((oldState => ({...oldState, jobCardOpen: true})))}>Check details</Button>
                  {/* <Button variant='contained' onClick={()=> navigate(`/jobs/${props.jobDetails.id}`)}>Check details</Button> */}
                </Grid>
              </Grid>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Date</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell align='center'>
                      <IconButton color='primary' onClick={() => setAllState(oldState => ({...oldState, dialogOpen: true, operation: 'add'}))}><PlaylistAddRoundedIcon /></IconButton>
                      </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allState.dialogOpen && (<JobProgressCard 
                    open={allState.dialogOpen}
                    onClose={() => setAllState(oldState => ({...oldState, dialogOpen: false, progress: {date: moment().valueOf(), note: ''}}))}
                    update={allState.progress}
                    onSubmit={async (progressUpdate) => {
                      console.log(allState.operation)
                      if (allState.operation === 'edit') {
                        await dispatch(removeJobProgress(props.jobDetails.id, progressUpdate.date))
                      } 
                      await dispatch(addJobProgress(props.jobDetails.id, progressUpdate))
                      navigate(0)
                    }}
                  />)}
                  {props.jobDetails.updates?.map((u) => (
                    <TableRow key={u.date}>
                      <TableCell />
                      <TableCell component="th" scope="row">{moment(u.date).format('MMM Do, YYYY')}</TableCell>
                      <TableCell>{u.note}</TableCell>
                      <TableCell align='center'>
                        <IconButton 
                          color="primary" 
                          onClick={() => {
                            setAllState(oldState => ({...oldState, dialogOpen: true, progress: {date: u.date, note: u.note}, operation: 'edit'}))}
                          }
                        ><EditNoteRoundedIcon /></IconButton>
                        <IconButton
                          color="primary"
                          onClick={async () => {
                            await dispatch(removeJobProgress(props.jobDetails.id, u.date))
                            navigate(0)
                          }}
                          ><DeleteForeverRoundedIcon /></IconButton>
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default JobRow