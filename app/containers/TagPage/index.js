/*
 * TagPage
 *
 * This is the first thing users see of our App, at the '/work' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import PortfolioItems from './PortfolioItems.js';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Works from 'data/Works.js'
import Logo from 'images/logo/logo_stacked.png'
import messages from './messages';

export default function TagPage(props) {

  const slug = props.match.params.slug

  const heading = slug.replace('-',' ')

  let matchedItems = [];

  for(let i=0;i<Works.length;i++){
    if(Works[i].categories.includes(slug)){
      matchedItems.push(Works[i])
    }
  }

  const headingSpacer = {
    'paddingLeft': '20px'
  }

  return (
    <div className='app-wrapper'>
      <Helmet>
        <title>{'Hello Fredrik - '+heading}</title>
        <meta property="og:title" content={'Hello Fredrik - '+heading} />
        <meta property="og:description" content={'Conted sorted by '+heading} />
        <meta property="og:image" content={window.location.origin+Logo} />
      </Helmet>
      <Header />
      <div style={headingSpacer}>
        <Heading heading={heading} />
      </div>
      <PortfolioItems items={matchedItems}/>
      <Footer />
    </div>
  );
}
