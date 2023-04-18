import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useCalculateTax } from '../hooks/useCalculateTax';
import { useTaxContext } from '../hooks/useTaxContext';

type Props = {};

export const Form = (props: Props) => {
  const [income, setIncome] = useState<number>();
  const [year, setYear] = useState<number>();

  const [calculateTax] = useCalculateTax();
  const { isCalculating, setAnnualIncome } = useTaxContext();

  const handleOnClick = () => {
    // Validate input here before making reuest
    if (typeof income !== 'number') {
      // TODO: Fire toast for income must be a number
    } else if (typeof year !== 'number') {
      // TODO: Fire toast for year must be a number
    } else {
      setAnnualIncome(income);
      calculateTax(income, year);
    }
  };

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
    <form style={{ minWidth: '500px', height: '100%' }}>
      <TextField
        style={{ margin: '5px' }}
        type="number"
        label="Annual Income"
        variant="outlined"
        // NOTE: Optionally setting value to empty string so that the component remains Controlled at all times.
        value={income || ''}
        onChange={handleIncomeChange}
      />
      <br />
      <TextField
        style={{ margin: '5px' }}
        type="text"
        label="Tax Year"
        variant="outlined"
        value={year || ''}
        onChange={handleYearChange}
      />
      <br />

      <Button variant="contained" onClick={handleOnClick} disabled={isCalculating}>
        Calculate
      </Button>
    </form>
  );
};
