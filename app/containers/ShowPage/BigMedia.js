import React from 'react';

function BigMedia(props) {

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
    'fontWeight': '200',
    'padding': '0 4px 4px 4px'
  }

  const iframeStyles = {
    'display': 'block',
    'width': '100%'
  }

  if(props.type === 'image'){
      return(
        <div className='media-container'>
          <div style={imageWrapperStyles}>
            <img style={imageStyles} src={props.url} alt={props.alt} />
            <p style={bylineStyles}>{props.byline}</p>
          </div>
        </div>
      )
  } else if(props.type === 'video'){
      return(
        <div className='media-container'>
          <div style={imageWrapperStyles}>
            <iframe style={iframeStyles} width="560" height="315" src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoplay></iframe>
            <p style={bylineStyles}>{props.byline}</p>
          </div>
        </div>
      )
  }
}

export default BigMedia
