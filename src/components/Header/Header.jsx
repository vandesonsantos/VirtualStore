import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import BsCart from '../cartButton/cartButton';

function Header() {
  return (
    <header className="header">
      <div className="conteiner">

        <SearchBar />

        <BsCart />
        
      </div>
    </header>
  );
}

export default Header;
