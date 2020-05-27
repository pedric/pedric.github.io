/*
 * WorkPage
 *
 * This is the first thing users see of our App, at the '/work' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import PortfolioItems from './PortfolioItems.js';
import Footer from 'components/Footer';
import Logo from 'images/logo/logo_stacked.png';
import messages from './messages';

export default function WorkPage() {
  return (
    <div className='app-wrapper'>
      <Helmet>
        <meta property="og:title" content="Hello Fredrik - All the stuff" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={window.location.origin+Logo} />
      </Helmet>
      <Header />
      <PortfolioItems />
      <Footer />
    </div>
  );
}
