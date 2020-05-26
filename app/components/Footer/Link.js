import React from 'react'

function Link(props){

  const styles = {
    'textDecoration': 'none',
    'color': props.color
  }
  return(
    <a className={props.classes} style={styles} href={props.target}>{props.name}</a>
  )
}

export default Link
