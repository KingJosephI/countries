import './SelectContinent.scss';

const SelectContinent = () => {
  return (
    <select className="select" name="continents" id="continents">
      <option className="select__continent" value="" disabled>
        Filter by Region
      </option>
      <option className="select__continent" value="africa">
        Africa
      </option>
      <option className="select__continent" value="america">
        America
      </option>
      <option className="select__continent" value="asia">
        Asia
      </option>
      <option className="select__continent" value="europ">
        Europe
      </option>
      <option className="select__continent" value="oceania">
        Oceania
      </option>
    </select>
  );
};

export default SelectContinent;
