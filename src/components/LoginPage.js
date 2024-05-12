import React, { useState } from "react";
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import { logIn } from "../firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()

    const [logInState, setLogInState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.persist()
        setLogInState((oldState) => ({...oldState, [e.target.name]: e.target.value}))
    }


    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
            <Box>
                <Typography variant="caption">Email: test@cherie.com Password: test1234</Typography>
            </Box>

            <Grid item xs={3}>
                <TextField required label="Email" name="email" onChange={handleChange}/>
                </Grid>
            <Grid item xs={3}>
                <TextField label="Password" type="password" name="password" onChange={handleChange}/>
            </Grid>

            <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => {
                logIn(logInState.email, logInState.password, (user) => {
                    navigate('/jobboard')
                })}}>Log In</Button>
            </Box>

        </Grid>
    )
}

export default LoginPage;