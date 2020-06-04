/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Body from './Body';
import Footer from 'components/Footer';
import messages from './messages';
import Logo from 'images/logo/logo_stacked.png'

export default function HomePage() {

  return (
    <div className='app-wrapper'>
      <Helmet>
        <title>{'Hello Fredrik'}</title>
        <meta property="og:title" content="Hello. I’m Fredrik, I build user interfaces." />
        <meta property="og:description" content="My tools are HTML, CSS, JavaScript, React, PHP, Adobe CC, Git, Pencil and paper." />
        <meta property="og:image" content={window.location.origin+Logo} />
      </Helmet>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
