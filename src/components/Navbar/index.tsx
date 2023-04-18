import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

export function Navbar() {
  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between', height: '150px' }}>
        <img src="images/Points.png" alt="logo" />
        <Typography variant="h5" color="black" component="h5">
          Tax Calulator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
