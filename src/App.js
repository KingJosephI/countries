import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="search-zone">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
