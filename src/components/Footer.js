import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Copyright = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.info.main,
    padding: theme.spacing(1),
}))

const Footer = () => {
    return (
        <Box fullWidth bgcolor="info.main">
            <Grid container direction="column" mt={2}>
                
                <Grid item py={2}>
                    <Box sx={{ mx: 'auto', maxWidth:500 }}>
                        <Grid container direction="row"  justifyContent="space-evenly">
                                <Grid item><IconButton><AccountCircleRoundedIcon fontSize="large"/></IconButton></Grid>
                                <Grid item><IconButton><AccountCircleRoundedIcon fontSize="large"/></IconButton></Grid>
                                <Grid item><IconButton><AccountCircleRoundedIcon fontSize="large"/></IconButton></Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item m={2}>
                <Box p={2} borderTop="">
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item p={2}>
                            <Copyright>
                                Job Application Tracker. Design by{" "}
                                <a href="https://www.linkedin.com/in/cherie-c-sun" rel="nofollow">Cherie</a> &copy; 2024
                            </Copyright>
                        </Grid>
                    </Grid>
                </Box>
                </Grid>
            </Grid>
      </Box>
    )
}

export default Footer;