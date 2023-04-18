import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import { useCalculateTax } from '../hooks/useCalculateTax';

type Props = {};

export const Form = (props: Props) => {
  const [income, setIncome] = useState<number>();
  const [year, setYear] = useState<number>();

  

  console.log({ error, data, isCalculating });

  // console.log(income, year);

  const handleIncomeChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(parseFloat(value));
  };

  const handleYearChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseFloat(value));
  };



  return (
    <form>
      <TextField
        style={{ width: '200px', margin: '5px' }}
        type="number"
        label="Annual Income"
        variant="outlined"
        // NOTE: Optionally setting value to empty string so that the component remains Controlled at all times.
        value={income || ''}
        onChange={handleIncomeChange}
      />
      <br />
      <TextField
        style={{ width: '200px', margin: '5px' }}
        type="text"
        label="Tax Year"
        variant="outlined"
        value={year || ''}
        onChange={handleYearChange}
      />
      <br />
      
    </form>
  );
};
