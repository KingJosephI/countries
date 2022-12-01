import Country from './Country/Country';

const CountriesList = ({ countries, isLoading }) => {
  return (
    <section className="countries__list">
      {isLoading
        ? 'Loading...'
        : countries.map((country, id) => (
            <Country key={id} country={country} />
          ))}
    </section>
  );
};

export default CountriesList;
