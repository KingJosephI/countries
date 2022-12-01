import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCountriesList = (url) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios(url);
      const allCountriesData = await result.data;
      setCountries(allCountriesData);
      setIsloading(false);
    };

    getCountries();
  }, [url]);

  return [countries, setCountries, isLoading];
};
