import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Country, SearchBar, SelectContinent } from './components';
import './Countries.scss';

const Countries = () => {
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
    <main className="countries">
      <section className="countries__filter-section">
        <SearchBar />
        <SelectContinent />
      </section>
      <section className="countries__list">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </section>
    </main>
  );
};

Countries.propTypes = {
  countries: PropTypes.array,
};
export default Countries;
