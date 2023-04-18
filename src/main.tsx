import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TaxProvider } from './hooks/useTaxContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <TaxProvider>
      <App />
    </TaxProvider>
  </React.StrictMode>,
);
