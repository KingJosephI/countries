import DarkModeToggle from './DarkModeToggle';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the World</h1>
      <DarkModeToggle className="header__dark-mode" />
    </header>
  );
};

export default Header;
