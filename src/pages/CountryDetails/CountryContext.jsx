import axios from 'axios';
import { useEffect, useState } from 'react';

export const useContryInfo = (pathname) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getCountryDetails = async () => {
      const result = await axios(
        `https://restcountries.com/v3.1/name/${pathname}`
      );
      const countryData = await result.data[0];
      setCountry(countryData);
    };

    getCountryDetails();
  }, [pathname]);

  return [country, setCountry];
};
