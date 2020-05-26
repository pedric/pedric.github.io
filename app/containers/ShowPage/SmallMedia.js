import React from 'react';

function SmallMedia(props) {

  const wrapperStyles = {
    // 'position': 'relative',
    // 'flexBasis': '50%',
    // 'maxWidth': '50%',
    // 'minWidth': '400px',
    // 'padding': '0 20px 0 0'
  }

  const imageStyles = {
    'maxWidth': '100%'
  }

  const bylineStyles = {
    'display': 'block',
    'fontSize': '12px',
    'fontWeight': '200',
    'paddingLeft': '4px'
  }

  const iframeStyles = {
    'display': 'block',
    'width': '100%'
  }

  if(props.type === 'image'){
    return(
      <div className='media-container'>
        <img style={imageStyles} src={props.url} alt={props.alt} />
        <p style={bylineStyles}>{props.byline}</p>
      </div>
    )
  } else if(props.type === 'video'){
    return(
      <div className='media-container' >
        <iframe style={iframeStyles} width="560" height="315" src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoplay></iframe>
        <p style={bylineStyles}>{props.byline}</p>
      </div>
    )
  }
}

export default SmallMedia
