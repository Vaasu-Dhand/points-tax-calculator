import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Tax } from './components/Tax';
import { Navbar } from './components/Navbar';
import { Container, Alert, Collapse } from '@mui/material';
import { useTaxContext } from './hooks/useTaxContext';

function App() {
  const [alertProps, setAlertProps] = useState({
    isOpen: false,
    message: 'Something went wrong!',
  });

  // Show error alert when request fails
  const { error } = useTaxContext();
  useEffect(() => {
    if (error.isError) {
      setAlertProps({
        isOpen: true,
        message: error.errorMessage,
      });
    }
  }, [error]);

  return (
    <div className="App">
      <Collapse in={alertProps.isOpen}>
        <Alert
          severity="error"
          onClose={() => {
            setAlertProps((prev) => ({
              ...prev,
              isOpen: false,
            }));
          }}
        >
          {alertProps.message}
        </Alert>
      </Collapse>
      <Navbar />
      <Container sx={containerStyles}>
        <Form setAlertProps={setAlertProps} />
        <Tax setAlertProps={setAlertProps} />
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
