import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../common/Layout/Layout';
import './CountryDetails.scss';

const CountryDetails = ({ country = {} }) => {
  const navigate = useNavigate();
  const {
    state: {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      borders,
      languages,
      currencies,
    },
  } = useLocation();

  return (
    <Layout>
      <main className="country-details">
        <div className="country-details__arrow" onClick={() => navigate('/')}>
          <BsArrowLeft /> Back
        </div>
        <section>
          <div className="country-details__flag">
            <img src={flags?.png} alt="" />
          </div>

          <div className="country-details__content">
            <h1 className="country-details__name">{name?.common}</h1>
            <div>
              <div className="country-details__info">
                <span>Native Name: </span>
                {/* {name?.nativeName?.nld?.official} */}
              </div>
              <div className="country-details__info">
                <span>Population: </span>
                {population}
              </div>
              <div className="country-details__info">
                <span>Region: </span>
                {region}
              </div>
              <div className="country-details__info">
                <span>Sub Region: </span>
                {subregion}
              </div>
              <div className="country-details__info">
                <span>Capital: </span>
                {capital && capital[0]}
              </div>
            </div>
            <div>
              <div className="country-details__info">
                <span>Top Level Domain: </span>
                {tld[0]}
              </div>
              <div className="country-details__info">
                <span>Currencies: </span>
                {/* {currencies.AWG.name} */}
                {Object.values(currencies)?.map(({ name, symbol }, id) => (
                  <span key={id} className="country-details__language">
                    {name} ({symbol})
                  </span>
                ))}
              </div>
              <div className="country-details__info">
                <span>Languages: </span>
                {Object.values(languages)?.map((language, id) => (
                  <span key={id} className="country-details__language">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="country-details__info border-country">
                <span>Border Countries:</span>
              </div>
              <div>
                {borders?.map((border, id) => (
                  <span key={id} className="country-details__border">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CountryDetails;
