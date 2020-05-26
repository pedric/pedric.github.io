import React from 'react'

function Heading(props) {

  const styles = {
    'fontSize': '20px',
    'textTransform': 'capitalize'
  }

  return (
    <h1 style={styles}>{props.heading}</h1>
  )
}

export default Heading
