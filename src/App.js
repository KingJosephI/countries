import { CountryProvider } from './contexts/CountryContext';
import CountryList from './components/CountryList/CountryList';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';

function App() {
  return (
    <CountryProvider>
      <div className="App">
        <Header />
        <div className="search-zone">
          <SearchBar />
        </div>
        <CountryList />
      </div>
    </CountryProvider>
  );
}

export default App;
