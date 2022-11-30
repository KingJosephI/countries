import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.scss';

const SearchBar = ({ ...props }) => {
  // const handleChange = () => {

  // }

  return (
    <div className="search">
      <BiSearchAlt2 className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."
        // onChange={handleChange}
        // value={query}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
