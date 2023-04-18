import React, { useContext, createContext, useState, ReactNode } from 'react';

// Custom Hook for consuming & setting tax state using React's Context API

const TaxContext = createContext<TaxContextType>({
  error: { isError: false, errorMessage: '' },
  setIsError: () => {},
  isCalculating: false,
  setIsCalculating: () => {},
  data: undefined,
  setData: () => {},
});

type TaxProviderProps = {
  children: ReactNode;
};

export const TaxProvider = ({ children }: TaxProviderProps) => {
  const [error, setIsError] = useState<ErrorState>({ isError: false, errorMessage: '' });
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [data, setData] = useState<any>();

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

type ErrorState = {
  isError: boolean;
  errorMessage: string;
};

type TaxContextType = {
  error: ErrorState;
  setIsError: (errorState: ErrorState) => void;
  isCalculating: boolean;
  setIsCalculating: (isCalc: boolean) => void;
  data: any;
  setData: (data: any) => void;
};
