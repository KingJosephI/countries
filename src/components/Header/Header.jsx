import { HiOutlineMoon } from 'react-icons/hi';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world</h1>
      <div className="header__darkmode-container">
        <HiOutlineMoon />
        <span>Dark Moon</span>
      </div>
    </header>
  );
};

export default Header;
