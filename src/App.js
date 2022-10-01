import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
