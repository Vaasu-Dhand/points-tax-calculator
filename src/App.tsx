import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { Form } from './components/Form';
import { Tax } from './components/Tax';
import { Navbar } from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={containerStyles}>
        <Form />
        <Tax />
      </div>
    </div>
  );
}

export default App;

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '6rem',
  paddingRight: '4rem',
  paddingLeft: '4rem',
};
