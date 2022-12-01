import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../common/Layout/Layout';
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

      const filteredCountries = await allCountriesData.filter((data) =>
        data.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );

      searchTerm
        ? setCountries(filteredCountries)
        : setCountries(allCountriesData);

      const countriesByRegion = await allCountriesData.filter((data) =>
        data.region.toLowerCase().includes(region.toLowerCase())
      );

      region ? setCountries(countriesByRegion) : setCountries(allCountriesData);

      setIsloading(false);
    };

    getCountries();
  }, [searchTerm, region]);

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

        {isLoading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Loading...
          </div>
        ) : (
          <CountriesList countries={countries} />
        )}
      </main>
    </Layout>
  );
};

export default Countries;
