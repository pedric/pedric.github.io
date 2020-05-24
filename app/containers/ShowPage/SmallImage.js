import React from 'react';

function SmallImage(props) {

  const wrapperStyles = {
    'position': 'relative',
    'flexBasis': '50%',
    'maxWidth': '50%',
    'minWidth': '400px',
    'padding': '0 20px 0 0'
  }

  const imageStyles = {
    'maxWidth': '100%'
  }

  const bylineStyles = {

  }

  return(
    <div className='media-container' style={wrapperStyles}>
      <img style={imageStyles} src={props.url} alt={props.alt} />
      <p style={bylineStyles}>{props.byline}</p>
    </div>
  )
}

export default SmallImage
