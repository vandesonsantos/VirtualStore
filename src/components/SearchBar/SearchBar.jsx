import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input 
        type="search" 
        value={ searchValue }
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required  
      />

      { searchValue }
      <button 
        type="submit" 
        className="search__button">
        <CgSearch />
      </button>
    </form>
  );
}

export default SearchBar;
