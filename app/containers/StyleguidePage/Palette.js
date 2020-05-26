import React from 'react'

function Palette(props){

  console.log(props)

  const titleStyles = {
    'fontSize': '16px',
    'color': props.color,
    'padding': '40px 0 10px 10px',
    'margin': '0',
    'fontWeight': '400'
  }

  return(
    <div>
      <h3 style={{'margin': '40px 0 10px 10px'}}>{props.name}</h3>
      <div style={{'background': props.dark}}>
        <h6 style={titleStyles}>{props.name + ', dark   ('+props.dark+')'}</h6>
      </div>
      <div style={{'background': props.neutral}}>
        <h6 style={titleStyles}>{props.name + ', neutral   ('+props.neutral+')'}</h6>
      </div>
      <div style={{'background': props.light}}>
        <h6 style={titleStyles}>{props.name + ', light   ('+props.light+')'}</h6>
      </div>
    </div>
  )
}

export default Palette
