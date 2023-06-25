import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="conteiner">

        <SearchBar />

        <button>car</button>

      </div>
    </header>
  );
}

export default Header;
