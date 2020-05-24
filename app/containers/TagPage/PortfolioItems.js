import React from 'react'
import Works from 'data/Works.js'
import ListCard from './ListCard.js'

function PortfolioItems(props) {
  const styles = {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'flexWrap':'wrap'
  }

  const items = props.items.map(item =>
  <ListCard
  key={item.title}
  target={item.slug}
  thumbnail={item.thumbnail}
  title={item.title}
  description={item.description}
  categories={item.categories}
  />)

  return(
    <div>
      <div style={styles}>
        {items}
      </div>
    </div>
  )
}

export default PortfolioItems
