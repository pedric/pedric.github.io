import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink'

function MenuItem(props) {

console.log(props)

  return(
    <li>
        <HeaderLink className={props.classes} to={props.target}>{props.name}</HeaderLink>
    </li>
  )
}

export default MenuItem;
