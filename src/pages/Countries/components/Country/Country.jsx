import PropTypes from 'prop-types';
import './Country.scss';

const Country = ({ country = {} }) => {
  const { name, population, region, capital, flags } = country;
  return (
    <div className="country">
      <div>
        <img src={flags.png} alt={`${name} flag`} />
      </div>
      <div>
        <h2 className="country__name">{name.common}</h2>
        <div>
          <span className="country__info">Population</span>: {population}
        </div>
        <div>
          <span className="country__info">Region</span>: {region}
        </div>
        <div>
          <span className="country__info">Capital</span>: {capital}
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};
export default Country;
