import React from 'react';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { blue, purple, yellow } from '@mui/material/colors';

const maintheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: yellow[700],
      },
      secondary: {
        main: blue[300],
        dark: purple[200], 
      }
    },
  });
  

  type ThemeProps = {
    children: React.ReactNode;
  }

  export const Theme = ({ children } : ThemeProps) => {
    return (
        <ThemeProvider theme = {maintheme}> 
          {children}
        </ThemeProvider>
    )
  }
