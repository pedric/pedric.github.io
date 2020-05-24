import styled from 'styled-components';
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import logo from './logo.svg';

function Header() {

  const styles = {
    'padding': '20px',
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'flexWrap':'wrap'
  }

  return(
    <header style={styles}>
      <Logo className='logo' src={logo} alt='Hello Fredrik - Logo'/>
      <Menu />
    </header>
  );
}

export default Header;
