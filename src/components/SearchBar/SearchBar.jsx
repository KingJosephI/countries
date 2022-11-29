import { BiSearchAlt2 } from 'react-icons/bi';
import './Search.scss';

const SearchBar = ({ ...props }) => {
  return (
    <div className="search">
      <BiSearchAlt2 className="search__icon" />
      <input
        className="search__input"
        type="search"
        placeholder="Search for a country..."
        {...props}
      />
    </div>
  );
};

export default SearchBar;
