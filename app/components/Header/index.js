import styled from 'styled-components';
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import logo from './logo.svg';

function Header() {
  return(
    <header>
      <Logo className='logo' src={logo} alt='Hello Fredrik - Logo'/>
      <Menu />
    </header>
  );
}

export default Header;
