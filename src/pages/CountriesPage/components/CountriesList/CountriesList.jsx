// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Country from './Country/Country';

const CountriesList = ({ countries }) => {
  // const [countries, setcountries] = useState([]);
  // const [query, setQuery] = useState('');

  // const getCountries = async () => {
  //   const result = await axios('https://restcountries.com/v3.1/all');
  //   const data = await result.data;

  //   setcountries(query ? data.filter(country => country.name.common.contains(query)) :data);
  // };

  // useEffect(() => {
  //   getCountries();
  // }, []);

  return (
    <section className="countries__list">
      {countries.map((country, id) => (
        <Country key={id} country={country} />
      ))}
    </section>
  );
};

export default CountriesList;
