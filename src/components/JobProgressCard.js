import React, { useState, Fragment } from 'react';
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import moment from 'moment';


const JobProgressCard = (props) => {

    const [dialogState, setDialogState] = useState({
      date: props.update.date,
      note: props.update.note,
      error: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!dialogState.date || !dialogState.note) {
        setDialogState(oldState => ({...oldState, error: 'Please provide suffcient information to record your job application progress.'}))
      } else {
        setDialogState(oldState => ({...oldState, error: ''}))
        props.onSubmit({
          date: dialogState.date.valueOf(),
          note: dialogState.note
        })
        props.onClose()
      }
    }
  
    return (
      <Fragment>
        <Dialog open={props.open} onClose={() => props.onClose()} PaperProps={{ component: 'form', onSubmit: handleSubmit}} fullWidth>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item><DialogTitle>Record Progress</DialogTitle></Grid>
            <Grid item><IconButton onClick={() => props.onClose()}><CloseRoundedIcon/></IconButton></Grid>
          </Grid>
          <DialogContent>
            {dialogState.error && (<DialogContentText>{dialogState.error}</DialogContentText>)}
          <Grid container display="flex" justifyContent="space-between" my={2}>
            <Grid item >
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker size='small' label='date' value={moment(dialogState.date)} onChange={(date) => setDialogState(oldState => ({...oldState, date}))}/>
              </LocalizationProvider>
            </Grid>
            <Grid item><TextField value={dialogState.note} name="note" label="note" variant="standard" onChange={(e) => setDialogState(oldState => ({...oldState, note: e.target.value}))} /></Grid>
          </Grid>  
          </DialogContent>
          <DialogActions>
            <Button onClick={() => props.onClose()}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }


export default JobProgressCard;