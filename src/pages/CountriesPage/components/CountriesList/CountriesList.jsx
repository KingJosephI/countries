import Country from './Country/Country';

const CountriesList = ({ countries }) => {
  return (
    <section className="countries__list">
      {countries.map((country, id) => (
        <Country key={id} country={country} />
      ))}
    </section>
  );
};

export default CountriesList;
