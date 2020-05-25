/*
 * BlogPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import Body from './Body.js';
import Footer from 'components/Footer';

export default function BlogPage() {

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
