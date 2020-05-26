import React from 'react'
import MenuItem from './MenuItem'

function Menu(props){

  function isActive(item) {
    if (item.target === window.location.pathname) {
      item.active = 'active'
    } else {
      item.active = 'not-active'
    }
  }

  props.items.find(isActive)

  const styles = {
    'listStyle': 'none',
    'textTransform': 'uppercase',
    'textDecoration': 'none',
    'fontSize': '16px',
    'lineHeight': '29px',
    'padding': '10px 110px 10px 20px',
    'fontWeight': '100'
  }

  const items = props.items.map(item =>
    <MenuItem
    key={item.name}
    name={item.name}
    target={item.target}
    color={item.color}
    classes={item.active}/>
  )

  return(
    <ul style={styles}>
      {items}
    </ul>
  )
}

export default Menu
