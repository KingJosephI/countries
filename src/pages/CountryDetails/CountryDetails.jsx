import { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeConhtext';
import { useContryInfo } from './CountryContext';
import Layout from '../../common/Layout/Layout';
import './CountryDetails.scss';

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode] = useContext(DarkModeContext);
  const [country] = useContryInfo(location.pathname);

  return (
    <Layout>
      <main className="country-details">
        <div
          style={{ background: isDarkMode ? '#2B3844' : '#fff' }}
          className="country-details__arrow"
          onClick={() => navigate('/')}
        >
          <BsArrowLeft /> Back
        </div>
        <section className="country-details__data">
          <img
            className="country-details__flag"
            src={country?.flags?.svg}
            alt=""
          />

          <div className="country-details__content">
            <h1 className="country-details__name">{country?.name?.common}</h1>
            <div className="country-details__section1">
              <div className="country-details__info">
                <span>Native Name: </span>
                {country?.name?.nativeName &&
                  Array.from(Object.values(country?.name?.nativeName))[0]
                    ?.official}
              </div>
              <div className="country-details__info">
                <span>Population: </span>
                {country?.population?.toLocaleString('en-US')}
              </div>
              <div className="country-details__info">
                <span>Region: </span>
                {country?.region}
              </div>
              <div className="country-details__info">
                <span>Sub Region: </span>
                {country?.subregion}
              </div>
              <div className="country-details__info">
                <span>Capital: </span>
                {country?.capital && country?.capital[0]}
              </div>
            </div>
            <div className="country-details__section2">
              <div className="country-details__info">
                <span>Top Level Domain: </span>
                {country?.tld &&
                  Array.from(country?.tld).map((domain) => (
                    <span className="country-details__language">{domain}</span>
                  ))}
              </div>
              <div className="country-details__info">
                <span>Currencies: </span>

                {country?.currencies &&
                  Object.values(country?.currencies)?.map(
                    ({ name, symbol }, id) => (
                      <span key={id} className="country-details__language">
                        {name} ({symbol})
                      </span>
                    )
                  )}
              </div>
              <div className="country-details__info">
                <span>Languages: </span>
                {country?.languages &&
                  Object.values(country?.languages)?.map((language, id) => (
                    <span key={id} className="country-details__language">
                      {language}
                    </span>
                  ))}
              </div>
            </div>
            <div className="country-details__section3">
              <div className="country-details__info border-country">
                <span>Border Countries:</span>
              </div>
              <div>
                {country?.borders?.map((border, id) => (
                  <span
                    style={{ background: isDarkMode ? '#2B3844' : '#fff' }}
                    key={id}
                    className="country-details__border"
                  >
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
