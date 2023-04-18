import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';

import './App.css';
import { Form } from './components/Form';
import { Error } from './components/Error';
import { useCalculateTax } from './hooks/useCalculateTax';

function App() {

  const [calculateTax, error, data, isCalculating] = useCalculateTax();
  

  const handleOnClick = () => {
    // console.log('Calcluate tax for', income, year);
    // Validate input here before making reuest
    calculateTax(income, year);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h5">🚀 Tax Calculator 🔥</Typography>
        <Form />
        <Button variant="contained" onClick={handleOnClick} disabled={isCalculating}>
          Calculate
        </Button>
        <Error />
      </Container>
    </div>
  );
}

export default App;
