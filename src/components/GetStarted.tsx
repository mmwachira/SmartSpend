import { Box} from "@mui/material";
import React from "react";
import lp_saving1 from '../images/lp_saving1.png';
import lp_saving2 from '../images/lp_saving2.png';
import vaultimg from '../images/vaultimg.png';
import cashimg from '../images/cashimg.png';
import '../App.css';
import { ButtonDownload, ButtonStart } from "./ButtonGroup";
import { Theme } from "./Theme";

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
                    backgroundColor: "powderblue",
                    //border: "2px solid yellow"
                }}
                padding="2vh">
                    <Box
                        display="flex"
                        flexDirection="row"
                        height="auto"
                        width="auto"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        sx={{
                            backgroundColor: "white",
                            //border: "2px solid green"
                        }}
                        padding="1vh"
                        >
                            <img 
                            style={{
                                //border: "2px solid yellow",
                                height: "200px",
                                marginTop: "65vh",
                                marginRight: "5vh",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "flex-start"
                            }} 
                            src ={vaultimg} alt="curvedimage"/>

                            <Box
                            width="auto" 
                            height="auto"
                            justifyContent="flex-start"
                            alignItems="center"
                            padding="1vh" 
                            sx={{
                                //border: "2px solid pink"
                            }}>
                                    <h4 style={{color: "#ce93d8"}}>Get Started</h4>
                                    <h1>We <span style={{color: "#64b5f6"}}>Guarantee</span> The Worthiness Of Every <span style={{color: "#64b5f6"}}>Money</span> Transaction</h1>
                                    <p>Through precise and accurate calculations, we account for all of your expenditures and present them to you in different formats such as pie charts graphs etc</p>
                                    <ButtonDownload /> 
                            </Box>
                            <Box
                            width="auto"
                            height="auto"
                            justifyContent="flex-end"
                            alignItems="center"
                            padding="1vh"
                            sx={{
                                //border: "2px solid blue"
                            }}
                            >
                                <Box
                                display="flex"
                                flexDirection="row"
                                //padding="1vh" 
                                sx={{ 
                                    //border: "2px solid red"
                                }}>
                                    <img className="expenseimg" src={lp_saving1} alt="savingsimage" 
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            //border: "2px solid purple",
                                            width: "auto",
                                            height: 400,
                                            alignItems: "center",
                                            justifyContent: "flex-start"
                                        }} 
                                    />
                                    <img src={cashimg} alt="cashimage" 
                                    style={{
                                        width: 110,
                                        //border: "2px solid yellow",
                                        height: 60,
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        marginTop: "10vh",
                                        marginLeft: "2px"
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
                    sx={{
                        backgroundColor: "white",
                        //border: "2px solid brown"
                    }}
                    >
                        <Box
                        width="auto"
                        height="auto"
                        justifyContent="flex-start"
                        alignItems="center"
                        justifySelf="flex-start"
                        padding="2vh"
                        sx={{
                            //border: "2px solid black"
                        }}>
                            <img src={lp_saving2} alt="savingsimage" />
                        </Box>

                        <Box
                        width="auto"
                        height="auto"
                        justifyContent="flex-end"
                        alignItems="center"
                        padding="2vh"
                        sx={{
                            //border: "2px solid red"
                        }}>
                            <h4 style={{color: "#ce93d8"}}>Benefits</h4>
                            <h1>We Make Money Work In Your Favor</h1>
                            <p>By accurately determining your spending habits we can offer you tips on how best to save or invest your money</p>
                            <ButtonStart />
                        </Box>
                        
                    </Box>
                    
            </Box>
                
            
        
    )
}