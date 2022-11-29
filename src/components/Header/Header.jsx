// import {} from 'react-'
import { HiOutlineMoon } from 'react-icons/hi';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the World</h1>
      <div className="header__dark-mode">
        <HiOutlineMoon />
        Dark mode
      </div>
    </header>
  );
};

export default Header;
