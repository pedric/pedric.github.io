import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink'

function MenuItem(props) {
  return(
    <li>
        <HeaderLink to={props.target}>{props.name}</HeaderLink>
    </li>
  )
}

export default MenuItem;
