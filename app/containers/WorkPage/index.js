/*
 * WorkPage
 *
 * This is the first thing users see of our App, at the '/work' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import PortfolioItems from './PortfolioItems.js';
import Footer from 'components/Footer';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Header />
      <PortfolioItems />
      <Footer />
    </div>
  );
}
