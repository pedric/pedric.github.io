import React from 'react';
import { Helmet } from 'react-helmet';
import Works from 'data/Works.js'
import Header from 'components/Header';
import ArticleMeta from './ArticleMeta.js';
import BigMedia from './BigMedia.js';
import SmallMedia from './SmallMedia.js';
import Paragraph from './Paragraph.js';
import Blockquote from './Blockquote.js';
import Preamble from './Preamble.js';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Logo from 'images/logo/logo_stacked.png'

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

  let image = itemToPresent.bigMedia.find(item =>
    item.mediaType == 'image'
  )

  const OgTitle = itemToPresent.title
  const OgDescription = itemToPresent.description
  const OgImage = image && image['image'] ? image['image'] : Logo

  const bigMedia = itemToPresent.bigMedia.map(item =>
    <BigMedia key={item.alt} url={item.image} alt={item.alt} byline={item.byline} type={item.mediaType} video={item.video+'?rel=0&amp;autoplay=1&mute=1'} />
  )

  const paragraphs = itemToPresent.paragraphs.map(item =>
    <Paragraph key={item} text={item} />
  )

  const smallMedia = itemToPresent.smallMedia.map(item =>
    <SmallMedia key={item.alt} url={item.image} alt={item.alt} byline={item.byline} type={item.mediaType} video={item.video} />
  )

  return(
    <div className='app-wrapper'>
      <Helmet>
        <title>{'Hello Fredrik - '+itemToPresent.heading}</title>
        <meta property="og:title" content={'Hello Fredrik - '+OgTitle} />
        <meta property="og:description" content={OgDescription} />
        <meta property="og:image" content={window.location.origin+OgImage} />
      </Helmet>
      <Header />
      <div style={wrapperStyles}>
        <div className='media-container media-container--body' style={containerStyles}>
          <Blockquote quote={itemToPresent.quote} />
          <Preamble preamble={itemToPresent.preamble} />
          <ArticleMeta categories={itemToPresent.categories} paragraphs={itemToPresent.paragraphs} author={itemToPresent.author} button={itemToPresent.link} />
          <Heading heading={itemToPresent.heading} />
          {paragraphs}
          <Blockquote quote={itemToPresent.smallQuote} />
        </div>
        {bigMedia}
      </div>
      <div style={wrapperStyles}>
        {smallMedia}
      </div>
      <Footer />
    </div>
  );
}
