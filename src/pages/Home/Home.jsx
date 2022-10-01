import React from 'react';
import CountryList from '../../components/CountryList/CountryList';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="search-zone">
        <SearchBar />
      </div>
      <CountryList />
    </div>
  );
};

export default Home;
