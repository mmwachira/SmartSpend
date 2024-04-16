import { Box} from "@mui/material";
import React from "react";


export function Footer(){
    return(
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="auto"
            gap={4}
            sx={{
                //border: "2px solid black"
            }}>
                <Box>
                  <h4>Follow us</h4>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>X</p>
                  <p>TikTok</p>
                </Box>
                <Box>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>How it works</p>
                </Box>
                <Box>
                    <h4>Support</h4>
                    <p>Support Center</p>
                    <p>24/7 Service</p>
                    <p>Quick Chat</p>
                    <p>Contact Us</p>
                </Box>
            
            
        </Box>
    )
}