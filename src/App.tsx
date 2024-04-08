import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import Centered from './components/Centered';
import { Theme } from './components/Theme';
import Form from './components/Form';
import { ButtonGroup } from './components/ButtonGroup';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';
import Header from './components/Header';


function App() {
  return ( 
    
    <>
      <Header />
      <GetStarted />
      <ButtonGroup />
      <Footer />
      
    </>
      
  )
}

export default App;
