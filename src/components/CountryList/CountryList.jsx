import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../CountryCard/CountryCard';
import './CountryList.scss';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((allCountries) => {
      setCountries(allCountries.data);
    });
  }, [countries]);

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard
          country={country.name.common}
          capital={country.capital}
          region={country.region}
          population={country.population}
          flag={country.flags.png}
          key={country.altSpellings}
        />
      ))}
    </div>
  );
};

export default CountryList;
