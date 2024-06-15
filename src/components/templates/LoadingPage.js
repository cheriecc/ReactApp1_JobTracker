import React from "react";
import { Box, Grid, CircularProgress } from "@mui/material";


const LoadingPage = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
                >
                <Grid item xs={3}><CircularProgress /></Grid>
            </Grid>
        </Box>
    )
}

export default LoadingPage;