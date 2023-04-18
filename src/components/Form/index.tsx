import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { useCalculateTax } from '../../hooks/useCalculateTax';
import { useTaxContext } from '../../hooks/useTaxContext';

export const Form = ({ setAlertProps }) => {
  const [income, setIncome] = useState<number>();
  const [year, setYear] = useState<number>();

  const [calculateTax] = useCalculateTax();
  const { isCalculating, setAnnualIncome } = useTaxContext();

  const handleOnClick = () => {
    setAlertProps((prev) => ({
      ...prev,
      isOpen: false,
    }));

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
    <Paper elevation={3} sx={{ height: '100%' }}>
      <form
        style={{
          padding: '2rem',
          minWidth: '500px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
        <Button
          variant="contained"
          onClick={handleOnClick}
          disabled={isCalculating}
          size="large"
        >
          Calculate
        </Button>
      </form>
    </Paper>
  );
};
