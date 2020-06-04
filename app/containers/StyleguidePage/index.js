/*
 * StyleguidePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from 'components/Header';
import Body from './Body.js';
import Footer from 'components/Footer';
import StyleguideData from 'data/StyleguideData.js';

class StyleguidePage extends React.Component {

  constructor(){
    super()
    this.state = {
      data: StyleguideData
    }
  }

  render(){

    let pageToPresent = {}

    if(this.props.match.params.slug && StyleguideData.find( ({section}) => section == this.props.match.params.slug )) {
      pageToPresent = StyleguideData.find( ({section}) => section == this.props.match.params.slug )
    } else {
      pageToPresent = StyleguideData.find( ({section}) => section == 'welcome' )
    }

    const flexBoxStyles = {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'flexWrap': 'wrap'
    }

    return (
      <div className='app-wrapper'>
        <Header />
        <Body key={'styleguideBody'} item={pageToPresent} title={pageToPresent.section} />
        <Footer />
      </div>
    )
  }
}

export default StyleguidePage
