import React from 'react'

function GradientBorder() {

  const styles = {
    'position': 'absolute',
    'top': '0',
    'right': '0',
    'left': '0',
    'height': '2px',
    'background': 'transparent linear-gradient(270deg, #E8481D 0%, #D72C6D 50%, #045569 100%) 0% 0% no-repeat padding-box'
  }
  return(
    <div style={styles}></div>
  )
}

export default GradientBorder
