import './App.scss';
import CountryCard from './components/CountryCard/CountryCard';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="search-zone">
        <SearchBar />
      </div>
      <CountryCard />
    </div>
  );
}

export default App;
