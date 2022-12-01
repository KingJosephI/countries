import { BiSearchAlt2 } from 'react-icons/bi';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeConhtext';
import './SearchBar.scss';

const SearchBar = ({ ...props }) => {
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <div className="search">
      <BiSearchAlt2 className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."
        {...props}
        style={{
          background: isDarkMode ? '#2b3844' : '#fff',
          color: isDarkMode ? '#fff' : '#2b3844',
        }}
      />
    </div>
  );
};

export default SearchBar;
