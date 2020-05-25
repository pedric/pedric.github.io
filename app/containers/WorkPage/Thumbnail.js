import React from 'react'

function Thumbnail(props){

  const imageStyles = {
    'width': '100%'
  }

  const videoWrapperStyles = {
    'position': 'relative'
  }

  const iframeStyles = {
    'display': 'block',
    'width': '100%'
  }

  const screenStyles = {
    'position': 'absolute',
    'background': 'transparent',
    'top': '0',
    'right': '0',
    'bottom': '0',
    'left': '0',
    'width': '100%',
    'zIndex': '999'
  }

  if(props.type === 'image'){
      return(
        <img style={imageStyles} src={props.src} alt={props.alt} />
      )
  } else if(props.type === 'video'){
    return(
      <div style={videoWrapperStyles}>
        <iframe style={iframeStyles} width="160" height="90" src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoplay></iframe>
        <div className='screen' style={screenStyles}></div>
      </div>
    )
  }

}

export default Thumbnail
