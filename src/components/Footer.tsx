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
                </Box>
                <Box>
                    <h4>Company</h4>
                </Box>
                <Box>
                    <h4>Support</h4>
                </Box>
            
            
        </Box>
    )
}