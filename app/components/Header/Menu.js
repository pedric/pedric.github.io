import styled from 'styled-components';
import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  const styles = {
    'listStyle': 'none',
  }
  return(
    <ul style={styles}>
      <MenuItem target='/work' name='work' />
      <MenuItem target='/' name='about' />
    </ul>
  );
}

export default Menu;
