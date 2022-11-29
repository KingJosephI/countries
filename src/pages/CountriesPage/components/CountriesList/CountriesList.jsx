import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country/Country';

const CountriesList = () => {
  const [countries, setcountries] = useState([]);

  const getCountries = async () => {
    const result = await axios('https://restcountries.com/v3.1/all');
    const data = await result.data;
    setcountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <section className="countries__list">
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </section>
  );
};

export default CountriesList;
