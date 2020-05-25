import React from 'react'
import Works from 'data/Works.js'
import ListCard from './ListCard.js'

function PortfolioItems() {
  const styles = {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'flexWrap':'wrap'
  }

  const items = Works.map(item =>
  <ListCard
  key={item.title}
  target={'work/'+item.slug}
  type={item.thumbnail.type}
  thumbnail={item.thumbnail.media}
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
