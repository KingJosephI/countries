import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './contexts/CountryContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
