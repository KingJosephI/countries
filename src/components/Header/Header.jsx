// import {} from 'react-'
// import { HiOutlineMoon } from 'react-icons/hi';
import SwitchMode from './components/DarkmodeToggle/DarkmodeToggle';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the World</h1>
      <SwitchMode />
    </header>
  );
};

export default Header;
