import { HiOutlineMoon } from 'react-icons/hi';

const SwitchMode = ({ ...props }) => {
  return (
    <div className="header__dark-mode" {...props}>
      <HiOutlineMoon />
      Dark mode
    </div>
  );
};

export default SwitchMode;
