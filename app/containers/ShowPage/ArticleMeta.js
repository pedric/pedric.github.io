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

  const totalText = props.paragraphs.join(' ')

  const readtime = Math.ceil(totalText.split(' ').length / 150)

  const categories = props.categories.map(item =>
    <CategoryLink key={item} name={item} target={'../tags/'+item} />
  )

  return(
    <div>
    <span>{categories}</span>
    <span> </span>
    <span style={styles}>{readtime} min read</span>
    <span> </span>
    <span style={styles}>{props.author}</span>
    </div>
  )
}

export default ArticleMeta
