import { useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeConhtext';
import './SelectContinent.scss';

const SelectContinent = ({ ...props }) => {
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <select
      style={{
        background: isDarkMode ? '#2B3844' : '#fff',
        color: isDarkMode ? '#fff' : '#2B3844',
      }}
      className="select"
      name="continents"
      id="continents"
      {...props}
    >
      <option className="select__continent" value="" disabled>
        Filter by Region
      </option>
      <option className="select__continent" value="africa">
        Africa
      </option>
      <option className="select__continent" value="americas">
        America
      </option>
      <option className="select__continent" value="asia">
        Asia
      </option>
      <option className="select__continent" value="europe">
        Europe
      </option>
      <option className="select__continent" value="oceania">
        Oceania
      </option>
    </select>
  );
};

export default SelectContinent;
