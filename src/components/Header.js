import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Button, Link } from "@mui/material";
import { logOut } from "../firebase/auth";
import { auth } from '../firebase/firebase'


const Header = () => {

    const navigate = useNavigate()

    return (
        <Box py={10} bgcolor="primary.main" display="flex" justifyContent="center">
            <Grid container display="flex" justifyContent="flex-start" direction="row"  columnSpacing={2} maxWidth="lg" px={3}>
                <Grid item my={2}>
                    <Link component="button" onClick={() => navigate('/jobboard')} variant="h4" color="primary.contrastText" sx={{ textDecoration: 'none' }}>Job Application Tracker</Link>
                </Grid>
                {auth.currentUser && (<Grid item md={10} my={2} container display="flex" justifyContent="space-between">
                    <Button onClick={() => navigate('/create')} variant="contained">Add a New Job</Button>
                    <Button onClick={() => logOut(() => {
                        navigate('/')
                        navigate(0)
                    })} variant="contained">Log Out</Button>
                </Grid>)}
            </Grid>
        </Box>
    )
}

export default Header