import styled from 'styled-components';
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import logo from './logo.svg';

function Header() {

  const styles = {
    'padding': '0px',
    'minWidth': '210px',
    'flexBasis': '10%',
    'maxWidth': '10%'
  }

  const linkStyles = {
    'width': '210px'
  }

  return(
    <header style={styles}>
      <div>
        <a style={linkStyles} href='/'>
          <Logo className='logo' src={logo} alt='Hello Fredrik - Logo'/>
        </a>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
