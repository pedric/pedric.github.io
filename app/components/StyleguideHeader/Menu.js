import styled from 'styled-components';
import React from 'react';
import MenuItem from './MenuItem';
import StyleguideData from 'data/styleguideData.js';

function Menu(props) {

  // function isActive(item) {
  //   if (item.target === window.location.pathname) {
  //     item.active = 'active'
  //   } else {
  //     item.active = 'not-active'
  //   }
  // }
  //
  // StyleguideData.find(isActive)

  const items = StyleguideData.map(item =>
    <MenuItem
    key={item.section}
    name={item.section}
    target={'styleguide/'+item.section}
    classes='styleguide-link '/>
  )

  const styles = {
    'listStyle': 'none',
    'padding': '0 0 0 20px',
    'minWidth': '250px'
  }

  return(
    <ul style={styles}>
      {items}
    </ul>
  );
}

export default Menu;
