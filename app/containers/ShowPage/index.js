import React from 'react'
import Works from 'data/Works.js'
import Header from 'components/Header';
import ArticleMeta from './ArticleMeta.js';
import BigImage from './BigImage.js';
import SmallImage from './SmallImage.js';
import Paragraph from './Paragraph.js';
import Blockquote from './Blockquote.js';
import Preamble from './Preamble.js';
import Heading from 'components/Heading';
import Footer from 'components/Footer';

export default function ShowPage(props) {

  const itemToPresent = Works.find( ({slug}) => slug == props.match.params.slug )

  const wrapperStyles = {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'flexWrap': 'wrap'
  }

  const containerStyles = {
    'position': 'relative',
    // 'minWidth': '400px'
  }

  const bigImage = itemToPresent.bigImage.map(item =>
    <BigImage key={item.alt} url={item.image} alt={item.alt} byline={item.byline} />
  )

  const paragraphs = itemToPresent.paragraphs.map(item =>
    <Paragraph key={item} text={item} />
  )

  const smallImages = itemToPresent.smallImages.map(item =>
    <SmallImage key={item.alt} url={item.image} alt={item.alt} byline={item.byline} />
  )

  console.log(itemToPresent.bigImage)

  return(
    <div>
      <Header />
      <div style={wrapperStyles}>
        <div className='media-container media-container--body' style={containerStyles}>
          <Blockquote quote={itemToPresent.quote} />
          <Preamble preamble={itemToPresent.preamble} />
          <ArticleMeta categories={itemToPresent.categories} paragraphs={itemToPresent.paragraphs} author={itemToPresent.author} />
          <Heading heading={itemToPresent.heading} />
          {paragraphs}
          <Blockquote quote={itemToPresent.smallQuote} />
        </div>
        {bigImage}
      </div>
      <div style={wrapperStyles}>
        {smallImages}
      </div>
      <Footer />
    </div>
  );
}
