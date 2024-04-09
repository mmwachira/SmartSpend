import React from "react";
import { Box, Button } from "@mui/material";
import '../App.css';

export function ButtonDownload(){
    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="2vh"
        sx={{border: '2px solid grey'}}
        >
            <Button color="primary" variant="contained">Download</Button>
        </Box>
    )
}

export function ButtonStart(){
    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="2vh"
        sx={{border: '2px solid grey'}}
        >
            <Button color="secondary" variant="outlined">Get Started</Button>
        </Box>
    )
}