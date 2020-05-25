import React from 'react'

function ArticleHeading(props){

  const styles = {
    'fontSize': '18px'
  }

  return(
    <h2 style={styles}>{props.content}</h2>
  )
}

export default ArticleHeading
