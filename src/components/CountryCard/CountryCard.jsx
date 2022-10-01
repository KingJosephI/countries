import Proptypes from 'prop-types';
import myFlag from './drc.png';
import './CountryCard.scss';

const CountryCard = ({ country, flag, population, region, capital }) => {
  return (
    <div className="country">
      <div className="country__flag">
        {/* <img src={flag} alt="Country flag" /> */}
        <img src={flag} alt="Country flag" />
      </div>
      <div className="country__description">
        <h1 className="country__name">{country}</h1>
        <div>
          <span className="country__info">Population: </span>
          <strong>{population}</strong>
        </div>
        <div>
          <span className="country__info">Region: </span>
          <strong>{region}</strong>
        </div>
        <div>
          <span className="country__info">Capital: </span>
          <strong>{capital}</strong>
        </div>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: Proptypes.string,
  population: Proptypes.number,
  region: Proptypes.string,
  capital: Proptypes.string,
};

CountryCard.defaultProps = {
  flag: myFlag,
  country: 'Congo DR',
  population: 80000000,
  region: 'Africa',
  capital: 'Kinshasa',
};

export default CountryCard;
