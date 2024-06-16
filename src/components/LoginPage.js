import React, { useState } from "react";
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import { logIn } from "../firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()

    const [logInState, setLogInState] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleChange = (e) => {
        e.persist()
        setLogInState((oldState) => ({...oldState, [e.target.name]: e.target.value}))
    }


    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
            <Grid item>
                <Typography variant="caption">Email: test@cherie.com  Password: test1234 (visitor use) </Typography>
            </Grid>
            <Grid item>
                {!!logInState.error && (<Typography variant="warning">{logInState.error}</Typography>)}
            </Grid>

            <Grid item mt={2} xs={3}>
                <TextField required label="Email" name="email" onChange={handleChange}/>
            </Grid>
            <Grid item xs={3}>
                <TextField label="Password" type="password" name="password" onChange={handleChange}/>
            </Grid>

            <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => {
                logIn(logInState.email, logInState.password, (user) => {
                    setLogInState((oldState) => ({...oldState, error: ''}))
                    navigate('/jobboard')
                }, (e) => {
                    if (e.code === 'auth/invalid-email') {
                        setLogInState((oldState) => ({...oldState, error: 'Invalid email, please check!'}))
                    } else if (e.code === 'auth/wrong-password') {
                        setLogInState((oldState) => ({...oldState, error: 'Wrong password, please check!'}))
                    } else if (e.code === 'auth/too-many-requests') {
                        setLogInState((oldState) => ({...oldState, error: 'Too many attempts, please try later!'}))
                    }
                })}}>Log In</Button>
            </Box>

        </Grid>
    )
}

export default LoginPage;