import PropTypes from 'prop-types';
import { SearchBar, SelectContinent } from './components';
import CountriesList from './components/CountriesList/CountriesList';
import './CountriesPage.scss';

const Countries = () => {
  return (
    <main className="countries">
      <section className="countries__filter-section">
        <SearchBar />
        <SelectContinent />
      </section>
      <CountriesList />
    </main>
  );
};

Countries.propTypes = {
  countries: PropTypes.array,
};
export default Countries;
