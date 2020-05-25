/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import messages from './messages';

export default function NotFound() {

  const wrapperStyles = {
    'width': 'fit-content',
    'margin': '0 auto',
    'textAlign': 'center',
    'padding': '40px 20px'
  }

  const emojiStyles = {
    'lineHeight': '0',
    'fontSize': '64px'
  }

  const headingStyles = {
    'fontSize': '80px',
    'color': '#9E9E9E'
  }
  return (
    <div className='app-wrapper'>
      <Header />
      <div style={wrapperStyles}>
        <h1 style={headingStyles}>404</h1>
        <h2 style={emojiStyles}>🙃</h2>
        <p>Nothing found, <a href="/">would you like to return to the start?</a></p>
      </div>
      <Footer />
    </div>
  );
}
