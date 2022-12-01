import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeConhtext';
import DarkModeToggle from './DarkModeToggle';
import './Header.scss';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useContext(DarkModeContext);
  return (
    <header className={isDarkMode ? 'header-dark' : 'header'}>
      <h1 className="header__title">Where in the World</h1>
      <DarkModeToggle
        className="header__dark-mode"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </header>
  );
};

export default Header;
