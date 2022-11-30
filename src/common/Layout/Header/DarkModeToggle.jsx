import { HiOutlineMoon } from 'react-icons/hi';

const DarkmodeToggle = ({ ...props }) => {
  return (
    <div {...props}>
      <HiOutlineMoon />
      Dark mode
    </div>
  );
};

export default DarkmodeToggle;
