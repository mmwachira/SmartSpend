import React from 'react';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const outertheme = createTheme({
    palette: {
      primary: {
        main: purple[900],
      },
    },
  });
  
  const innertheme = createTheme({
    palette: {
      primary: {
        main: green[900],
      },
    },
  });

  type ThemeProps = {
    children: React.ReactNode;
  }

  export const Theme = ({ children } : ThemeProps) => {
    return (
        <ThemeProvider theme = {outertheme}>
            <ThemeProvider theme = {innertheme}>
                {children}
            </ThemeProvider>
        </ThemeProvider>
    )
  }
