import React from 'react';
import styled from 'styled-components';
import Link from './Link.js'

function MenuItem(props) {

  const styles = {
    'display': 'inline-block'
  }

  return(
    <li style={styles}>
        <Link className={props.classes} to={props.target}>{props.name}</Link>
    </li>
  )
}

export default MenuItem;
