import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { Form } from './components/Form';
import { Tax } from './components/Tax';
import { Navbar } from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <Typography variant="h5">🚀 Tax Calculator 🔥</Typography>
        <Form />
        <Tax />
      </Container>
    </div>
  );
}

export default App;
