import React from 'react'

function Media(props){

  if(props.type == 'image'){
      return(
        <div>
          <img style={{'width':'100%'}} src={props.item} alt={props.alt} />
          <p>{props.byline}</p>
        </div>
      )
  } else if(props.type == 'video'){
    return(
      <div>
        <iframe width="560" height="315" src={props.item} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoplay></iframe>
        <p>{props.byline}</p>
      </div>
    )
  } else if(props.type == 'document'){
    return(
      <div>
        <a href={props.item}>{props.byline}</a>
      </div>
    )
  }
}

export default Media
