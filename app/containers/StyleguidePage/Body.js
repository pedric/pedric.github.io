import React from 'react'
import Works from 'data/Works.js'
import Menu from './Menu.js'
import ArticleHeading from './ArticleHeading.js'
import Preamble from './Preamble.js'
import Paragraph from './Paragraph.js'
import Media from './Media.js'
import StyleguideData from 'data/StyleguideData.js';
import Heading from 'components/Heading';

function Body(props) {

  const styles = {
    'position': 'relative'
  }

  const contentWrapperStyles = {
    'padding': '20px',
    'margin': '0 auto',
    'maxWidth': '670px'
  }

  let blocks = props.item.blocks
  let content = []

  for(let i=0;i<blocks.length;i++){
    console.log(blocks[i])
    if(blocks[i].title){
      let element = <ArticleHeading key={blocks[i].title} content={blocks[i].title} />
      content.push(element)
    }

    if(blocks[i].preamble){
      let element = <Preamble content={blocks[i].preamble}/>
      content.push(element)
    }

    if(blocks[i].paragraphs){
      let element = blocks[i].paragraphs.map( paragraph =>
          <Paragraph content={paragraph} />
      )
      content.push(element)
    }

    if(blocks[i].media){
      let element = blocks[i].media.map( item =>
        <Media type={item.type} item={item.item} alt={item.alt} byline={item.byline} />
      )
      content.push(element)
    }
  }

  console.log(content)

  return(
    <div>
      <div style={styles}>
        <Menu items={StyleguideData}/>
        <div style={contentWrapperStyles}>
          <Heading heading={props.title} />
          {content}
        </div>
      </div>
    </div>
  )
}

export default Body
