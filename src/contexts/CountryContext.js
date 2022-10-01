import { createContext, useState } from 'react';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CountryContext.Provider value={[searchTerm, setSearchTerm]}>
      {children}
    </CountryContext.Provider>
  );
};
