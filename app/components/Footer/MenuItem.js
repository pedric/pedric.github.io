import React from 'react'
import Link from './Link'

function MenuItem(props) {

  return(
    <li>
      <Link classes={props.classes} name={props.name} target={props.target} color={props.color}/>
    </li>
  )
}

export default MenuItem
