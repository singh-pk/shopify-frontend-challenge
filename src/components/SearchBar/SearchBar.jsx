import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './SearchBar.scss';

const SeachBar = ({ name, handleChange, ...otherProps }) => {
  return (
    <div className='search-bar'>
      <label htmlFor={name}>Movie title</label>

      <div className='input'>
        <SearchIcon />
        <input type='text' id={name} onChange={handleChange} {...otherProps} />
      </div>
    </div>
  );
};

export default SeachBar;
