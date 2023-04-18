import React, { useContext, createContext, useState } from 'react';

// Custom Hook for consuming & setting tax state

const TaxContext = createContext();

export const TaxProvider = ({ children }) => {
  const [error, setIsError] = useState({ isError: false, errorMessage: '' });
  const [isCalculating, setIsCalculating] = useState(false);
  const [data, setData] = useState();

  return (
    <TaxContext.Provider
      value={{ error, setIsError, isCalculating, setIsCalculating, data, setData }}
    >
      {children}
    </TaxContext.Provider>
  );
};

export const useTaxContext = () => {
  return useContext(TaxContext);
};