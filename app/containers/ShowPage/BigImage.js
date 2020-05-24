import React from 'react';

function BigImage(props) {

  const imageWrapperStyles = {
    'position': 'sticky',
    'display': 'block',
    'top': '0'
  }

  const imageStyles = {
    'display': 'block',
    'maxWidth': '100%'
  }

  const bylineStyles = {
    'display': 'block',
    'fontSize': '12px',
    'fontWeight': '200'
  }

  return(
    <div className='media-container'>
      <div style={imageWrapperStyles}>
        <img style={imageStyles} src={props.url} alt={props.alt} />
        <p style={bylineStyles}>{props.byline}</p>
      </div>
    </div>
  )
}

export default BigImage
