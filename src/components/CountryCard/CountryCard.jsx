import Proptypes from 'prop-types';

const CountryCard = ({ country, flag, population, region, capital }) => {
  return (
    <div className="country">
      <div className="country__flag">
        <img src={flag} alt="Flag" />
      </div>
      <div className="country__description">
        <h1 className="country__name">{country}</h1>
        <strong className="country__info">Population</strong>: {population}
        <br />
        <strong className="country__info">Region</strong>: {region} <br />
        <strong className="country__info">Capital</strong>: {capital} <br />
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
  country: 'Congo DR',
  population: 80000000,
  region: 'Africa',
  capital: 'Kinshasa',
};

export default CountryCard;
