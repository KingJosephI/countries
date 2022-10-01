import { useState, useEffect, useContext } from 'react';
import { CountryContext } from '../../contexts/CountryContext';
import CountryCard from '../CountryCard/CountryCard';
import axios from 'axios';
import './CountryList.scss';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState('');
  const [searchTerm] = useContext(CountryContext);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((allCountries) => {
      setCountries(allCountries.data);
    });
  }, [countries]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((res) => setFilteredCountries(res.data));
  }, [searchTerm]);

  return (
    <div className="country-list">
      {searchTerm !== ''
        ? filteredCountries.map((country) => (
            <CountryCard
              country={country.name.common}
              capital={country.capital}
              region={country.region}
              population={country.population}
              flag={country.flags.png}
              key={country.altSpellings}
            />
          ))
        : countries.map((country) => (
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
