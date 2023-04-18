import React, { useState } from 'react';
import { Typography, Container, Button } from '@mui/material';

import './App.css';
import { Form } from './components/Form';
import { Error } from './components/Error';
import { useCalculateTax } from './hooks/useCalculateTax';
import { useTaxContext } from './hooks/useTaxContext';

function App() {

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h5">🚀 Tax Calculator 🔥</Typography>
        <Form />
       
        <Error />
      </Container>
    </div>
  );
}

export default App;
