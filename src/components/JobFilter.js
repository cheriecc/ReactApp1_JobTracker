import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { displaySavedOnly, displayAppliedOnly, setTextFilter, sortByInput } from "../slices/filterSlice";
import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';


const JobFilter = () => {

    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()


    return (
        <Box 
            sx={{
                display: 'flex',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
                marginY: 3,
                paddingX: 2
            }}
          >
                <Grid container justifyContent="space-between">

                <TextField label="Search" margin="dense" variant="standard" size="small" onChange={(e) => dispatch(setTextFilter(e.target.value))}/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel>Sort by</InputLabel>
                    <Select
                        value={filters.sortBy}
                        label="sortBy"
                        onChange={(e) => dispatch(sortByInput(e.target.value))}
                    >
                        <MenuItem value="deadline">Deadline</MenuItem>
                        <MenuItem value='salary'>Salary</MenuItem>
                    </Select>            
                </FormControl>
                
                <FormControlLabel 
                    control={<Switch 
                        checked={filters.appliedOnly} 
                        onChange={(e) => dispatch(displayAppliedOnly(e.target.checked))} 
                        inputProps={{ 'aria-label': 'controlled' }}
                        />}
                    label="Applied Jobs Only"
                />

                <FormControlLabel 
                    control={<Switch 
                        checked={filters.savedOnly} 
                        onChange={(e) => dispatch(displaySavedOnly(e.target.checked))} 
                        inputProps={{ 'aria-label': 'controlled' }}
                        />}
                    label="Saved Jobs Only"
                />

            </Grid>
        </Box>
    )
}

export default JobFilter;