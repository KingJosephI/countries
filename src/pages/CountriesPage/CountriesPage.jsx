import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../common/Layout/Layout';
import { SearchBar, SelectContinent, CountriesList } from './components';
import './CountriesPage.scss';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios('https://restcountries.com/v3.1/all');
      const data = await result.data;

      setCountries(data);
      setIsloading(false);
    };

    getCountries();
  }, []);

  return (
    <Layout>
      <main className="countries">
        <section className="countries__filter-section">
          <SearchBar />
          <SelectContinent />
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
