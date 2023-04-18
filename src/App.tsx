import React, { useState } from 'react';
import { Form } from './components/Form';
import { Tax } from './components/Tax';
import { Navbar } from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container sx={containerStyles}>
        <Form />
        <Tax />
      </Container>
    </div>
  );
}

export default App;

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '8rem',
  height: '100%',
  // paddingRight: '4rem',
  // paddingLeft: '4rem',
};
