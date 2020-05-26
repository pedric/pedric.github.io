import styled from 'styled-components';
import React from 'react';
import MenuItem from './MenuItem';
import MenuData from './MenuData';

function Menu(props) {

  function isActive(item) {
    if (item.target === window.location.pathname) {
      item.active = 'active'
    } else {
      item.active = 'not-active'
    }
  }

  MenuData.find(isActive)

  const items = MenuData.map(item =>
    <MenuItem
    key={item.name}
    name={item.name}
    target={item.target}
    classes={item.active}/>
  )

  const styles = {
    'listStyle': 'none',
    'padding': '0',
    'minWidth': '250px',
    // 'background': 'transparent linear-gradient(270deg, #E8481D 0%, #D72C6D 50%, #045569 100%) 0% 0% no-repeat padding-box',
    // 'WebkitBackgroundClip': 'text',
    // 'WebkitTextFillColor': 'transparent'
  }

  return(
    <ul style={styles}>
      {items}
    </ul>
  );
}

export default Menu;
