import React from 'react'
import MenuItem from './MenuItem'

function Menu(props){

  const styles = {
    'position': 'sticky',
    'top': '0',
    'listStyle': 'none',
    'textTransform': 'uppercase',
    'textDecoration': 'none',
    'fontSize': '16px',
    'lineHeight': '29px',
    'padding': '15px 20px',
    'fontWeight': '100',
    'textAlign': 'center',
    'background': '#f3f3f3'
  }

  const items = props.items.map(item =>
    <MenuItem
    key={item.section}
    name={item.section}
    target={'../styleguide/'+item.section}
    color='#000'/>
  )

  return(
    <ul style={styles}>
      {items}
    </ul>
  )
}

export default Menu
