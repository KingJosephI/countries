import { Routes, Route } from 'react-router-dom';
import { CountriesPage, CountryDetails } from './pages';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeConhtext';
import './App.scss';

function App() {
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <div className={isDarkMode ? 'container-dark' : 'container'}>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
