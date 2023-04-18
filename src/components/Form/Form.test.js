import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from '.';

describe('Form', () => {
  it('should render the form with two input fields and a button', () => {
    render(<Form />);
    expect(screen.getByLabelText('Annual Income')).toBeInTheDocument();
    expect(screen.getByLabelText('Tax Year')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Calculate' })).toBeInTheDocument();
  });

  it('should prevent button from clicking if not inputs enetered', () => {
    render(<Form />);
    const calculateButton = screen.getByRole('button', { name: 'Calculate' });
    fireEvent.click(calculateButton);
    expect(calculateButton).not.toBeDisabled();
  });

  it('should disable the button while the form is submitting', () => {
    render(<Form />);
    const calculateButton = screen.getByRole('button', { name: 'Calculate' });
    console.log(calculateButton);
    expect(calculateButton).not.toBeDisabled();

    const incomeInput = screen.getByLabelText('Annual Income');
    userEvent.type(incomeInput, 50000);

    const yearInput = screen.getByLabelText('Tax Year');
    userEvent.type(yearInput, 2022);

    fireEvent.click(calculateButton);
    expect(calculateButton).toHaveAttribute('disabled');
  });

  // Write Test for:

  // calls setAnnualIncome and calculateTax functions when the 'calculate' button is clicked
});
