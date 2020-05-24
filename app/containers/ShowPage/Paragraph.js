import React from 'react'

function Paragraph(props) {

  const styles = {
    'lineHeight': '22px',
    'margin': '30px 0'
  }
  return(
    <p style={styles}>{props.text}</p>
  )
}

export default Paragraph
