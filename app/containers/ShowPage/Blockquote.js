import React from 'react'

function Blockquote(props){

  const styles = {
    'textAlign': 'center',
    'fontSize': '38px',
    'fontWeight': '800',
    'lineHeight': '50px',
    'color': '#505050'
  }

  let quote = props.quote ? '"'+props.quote+'"' : ''

  return(
    <blockquote style={styles}>{quote}</blockquote>
  )
}

export default Blockquote
