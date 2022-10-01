import { useContext } from 'react';
import { CountryContext } from '../../contexts/CountryContext';
import './SearchBar.scss';

const SearchBar = () => {
  const [, setSearchTerm] = useContext(CountryContext);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default SearchBar;
