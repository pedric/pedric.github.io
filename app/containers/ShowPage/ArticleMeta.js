import React from 'react'
import CategoryLink from 'components/CategoryLink'

function ArticleMeta(props) {

  const styles = {
    'padding': '4px',
    'margin': '0 2px 0 0',
    'fontSize': '14px',
    'fontWeight': '100',
    'color': '#000',
    'textDecoration': 'none'
  }

  const spacerStyles = {
    'padding': '4px 8px',
    // 'margin': '0 2px 0 0',
    'fontSize': '14px',
    'fontWeight': '100',
    'color': '#e3e3e3'
  }

  const buttonStyles = {
    'margin': '0 2px 0 0',
    'textDecoration': 'none',
    'fontSize': '14px',
    'borderRadius': '20px',
    'fontWeight': '100',
    // button styles
    // 'color': '#000',
    // 'padding': '4px 8px',
    // 'border': '1px solid #000',
    // 'background': '#e3e3e3',
  }

  const totalText = props.paragraphs.join(' ')

  const readtime = Math.ceil(totalText.split(' ').length / 150)

  const categories = props.categories.map(item =>
    <CategoryLink key={item} name={item} target={'../tags/'+item} />
  )

  if(props.button){
    return(
      <div>
        <span>{categories}</span>
        <span style={spacerStyles}>|</span>
        <span style={styles}>{readtime} min read</span>
        <span style={spacerStyles}>|</span>
        <span style={styles}>{props.author}</span>
        <span style={spacerStyles}>|</span>
        <span style={styles}><a style={buttonStyles} href={props.button.url} target="_blank">{props.button.text}</a></span>
      </div>
    )
  } else {
    return(
      <div>
        <span>{categories}</span>
        <span style={spacerStyles}>|</span>
        <span style={styles}>{readtime} min read</span>
        <span style={spacerStyles}>|</span>
        <span style={styles}>{props.author}</span>
      </div>
    )
  }
}

export default ArticleMeta
