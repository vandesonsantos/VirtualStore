import React from 'react';
import { CgSearch } from 'react-icons/cg';
import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="search" 
        placeholder="Buscar produtos" 
        className="search__input"
        required  
      />

      <button 
        type="submit" 
        className="search__button">
        <CgSearch />
      </button>
    </form>
  );
}

export default SearchBar;
