import { Box} from "@mui/material";
import React from "react";
import lp_saving1 from '../images/lp_saving1.png';
import lp_saving2 from '../images/lp_saving2.png';
import '../App.css';
import { ButtonDownload, ButtonStart } from "./ButtonGroup";

export function GetStarted(){
    return(
            
            <Box
                width="auto"
                maxWidth="100%"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                gap={4}
                sx={{
                    border: "2px solid yellow"}}
                padding="2vh">
                    <Box
                        display="flex"
                        flexDirection="row"
                        height="auto"
                        width="auto"
                        justifyContent="center"
                        alignItems="center"
                        gap={4}
                        sx={{border: "2px solid green"}}
                        padding="2vh"
                        >
                            <Box
                            //overflow="hidden"
                            width="auto" 
                            height="auto"
                            justifyContent="flex-start"
                            alignItems="center"
                            padding="2vh" 
                            sx={{border: "2px solid pink"}}>
                                    <span>Get Started</span>
                                    <h1>We Guarantee The Worthiness Of Every Money Transaction</h1>
                                    <p>Through precise and accurate calculations, we account for all of your expenditures and present them to you in different formats such as pie charts graphs etc</p>
                                    <ButtonDownload /> 
                            </Box>
                            <Box
                            width="auto"
                            height="auto"
                            justifyContent="flex-end"
                            alignItems="center"
                            padding="2vh"
                            sx={{border: "2px solid blue"}}
                            >
                                <Box sx={{ border: "2px solid red"}}>
                                    <img className="expenseimg" src={lp_saving1} alt="savingsimage" 
                                        style={{
                                            width: 500,
                                            height: 400,
                                        }} 
                                    />
                                </Box>
                            
                        </Box>
                        
                    </Box>
                    
                    <Box
                    display="flex"
                    flexDirection="row"
                    width="auto"
                    height="auto"
                    padding="2vh"
                    gap={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{border: "2px solid brown"}}
                    >
                        <Box
                        width="auto"
                        height="auto"
                        justifyContent="flex-start"
                        alignItems="center"
                        justifySelf="flex-start"
                        padding="2vh"
                        sx={{border: "2px solid black"}}>
                            <img src={lp_saving2} alt="savingsimage" />
                        </Box>

                        <Box
                        width="auto"
                        height="auto"
                        justifyContent="flex-end"
                        alignItems="center"
                        padding="2vh"
                        sx={{border: "2px solid red"}}>
                            <span>Benefits</span>
                            <h1>We Make Money Work In Your Favor</h1>
                            <p>By accurately determining your spending habits we can offer you tips on how best to save or invest your money</p>
                            <ButtonStart />
                        </Box>
                        
                    </Box>
                    
            </Box>
                
            
        
    )
}