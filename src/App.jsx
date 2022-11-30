import { Routes, Route } from 'react-router-dom';
import { CountriesPage, CountryDetails } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/:country" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
