import React from 'react'

function CategoryLink(props){

  const styles = {
    'display': 'inline-block',
    'padding': '4px',
    'margin': '2px 2px 0 0',
    'fontSize': '14px',
    'fontWeight': '100',
    'color': '#000',
    'background': '#e3e3e3',
    'textDecoration': 'none'
  }

  return(
    <a style={styles} href={props.target}>{props.name}</a>
  )
}

export default CategoryLink
