import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Country.scss';

const Country = ({ country = {} }) => {
  const { name, population, region, capital, flags } = country;
  const navigate = useNavigate();

  return (
    <div
      className="country"
      onClick={() =>
        navigate(`/${name.common.toLowerCase()}`, { state: name.common })
      }
    >
      <div className="country__illustration">
        <img src={flags?.png} alt={`${name} flag`} />
      </div>
      <div className="country__content">
        <h2 className="country__name">{name.common}</h2>
        <div className="country__info-type">
          <span>Population</span>: {population?.toLocaleString('en-US')}
        </div>
        <div className="country__info-type">
          <span>Region</span>: {region}
        </div>
        <div className="country__info-type">
          <span>Capital</span>: {capital}
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};
export default Country;
