import './App.scss';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="search-zone">
        <SearchBar />
      </div>
      <CountryList />
    </div>
  );
}

export default App;
