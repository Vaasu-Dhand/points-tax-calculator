import { useState, useCallback } from 'react';
import { BASE_URL } from '../utils/api';
import { ERROR_MAP } from '../utils/constants';
import { useTaxContext } from './useTaxContext';

// Custom hook that makes an API call to get tax brackets

export const useCalculateTax = () => {
  // const [error, setIsError] = useState({ isError: false, errorMessage: '' });
  // const [isCalculating, setIsCalculating] = useState(false);
  // const [data, setData] = useState();
  const { setData, setIsError, setIsCalculating } = useTaxContext();

  const calculateTax = useCallback(async (income: number, year: number) => {
    setIsCalculating(true);
    console.log('Runs calculate Tax', income, year);

    const res = await fetch(`${BASE_URL}/${year}`);

    // Handle API error
    if (!res.ok) {
      setIsError({
        isError: true,
        errorMessage: ERROR_MAP[res.status],
      });
    }

    const data = await res.json();
    setData(data);
    setIsCalculating(false);
    return data;
  }, []);

  return [calculateTax];
};
