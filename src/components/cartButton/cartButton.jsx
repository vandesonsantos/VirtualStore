import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import './cartButton.css';

function cartButton() {
  return (
    <button type="button" className="cart__button">
      <BsCart3 />
      <span className="cart-status">1</span>
    </button>
  );
}

export default cartButton;
