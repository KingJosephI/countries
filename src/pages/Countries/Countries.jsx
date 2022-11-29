import SearchBar from './components/SearchBar/SearchBar';
import SelectContinent from './components/SelectContinent/SelectContinent';

const Countries = () => {
  return (
    <main className="countries">
      <section className="countries__filter-section">
        <SearchBar />
        <SelectContinent />
      </section>
      <section className="countries__list"></section>
    </main>
  );
};

export default Countries;
