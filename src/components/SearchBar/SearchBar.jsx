import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
