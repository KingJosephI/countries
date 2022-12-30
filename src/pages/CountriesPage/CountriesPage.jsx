import axios from 'axios';
import Layout from '../../common/Layout/Layout';
import { useEffect, useState } from 'react';
import { SearchBar, SelectContinent, CountriesList } from './components';
import './CountriesPage.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios('https://restcountries.com/v3.1/all');
      const allCountriesData = await result.data;

      if (searchTerm) {
        const filteredCountries = await allCountriesData.filter((data) =>
          data.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCountries(filteredCountries);
        return;
      }

      if (region) {
        const countriesByRegion = await allCountriesData.filter((data) =>
          data.region.toLowerCase().includes(region.toLowerCase())
        );

        setCountries(countriesByRegion);
        return;
      }
      setCountries(allCountriesData);
      setIsloading(false);
    };

    getCountries();
  }, [region, searchTerm]);

  return (
    <Layout>
      <main className="countries">
        <section className="countries__filter-section">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SelectContinent
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </section>
        <CountriesList countries={countries} isLoading={isLoading} />
      </main>
    </Layout>
  );
};

export default Countries;
