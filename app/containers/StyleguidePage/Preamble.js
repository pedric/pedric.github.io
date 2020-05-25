import React from 'react'

function Preamble(props){

  const styles = {
    'fontSize': '30px',
    'fontWeight': '400',
    'lineHeight': '38px',
    'color': '#000'
  }

  return(
    <p style={styles}>{props.content}</p>
  )
}

export default Preamble
