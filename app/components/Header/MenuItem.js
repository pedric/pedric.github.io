import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink'

function MenuItem(props) {

  const styles = {
    'display': 'inline-block'
  }

  return(
    <li style={styles}>
        <HeaderLink className={props.classes} to={props.target}>{props.name}</HeaderLink>
    </li>
  )
}

export default MenuItem;
