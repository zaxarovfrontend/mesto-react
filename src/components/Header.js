import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
    <img className="header__logo hover" src={logo} alt="логотип" />
  </header>
  );
}

export default Header;