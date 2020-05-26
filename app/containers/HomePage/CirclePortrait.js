import React from 'react'
import Portrait from './Portrait.jpg'

function CirclePortrait(){

  const styles = {
    'maxHeight' : '50px',
    'borderRadius': '50%'
  }
  return(
    <img style={styles} src={Portrait} alt='Fredrik Larsson - Portrait' />
  )
}

export default CirclePortrait
