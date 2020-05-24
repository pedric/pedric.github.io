import React from 'react'

function Blockquote(props){

  const styles = {
    'textAlign': 'center',
    'fontSize': '48px',
    'fontWeight': '800',
    'lineHeight': '62px',
    'color': '#505050'
  }

  return(
    <blockquote style={styles}>"{props.quote}"</blockquote>
  )
}

export default Blockquote
