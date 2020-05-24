import React from 'react'

function Link(props){

  const styles = {
    'textDecoration': 'none',
    'color': props.color
  }
  return(
    <a style={styles} href={props.target}>{props.name}</a>
  )
}

export default Link
