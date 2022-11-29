import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.scss';

const SearchBar = ({ ...props }) => {
  return (
    <div className="search">
      <BiSearchAlt2 className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."
        {...props}
      />
    </div>
  );
};

export default SearchBar;
