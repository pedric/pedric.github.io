/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import WorkPage from 'containers/WorkPage/Loadable';
import ShowPage from 'containers/ShowPage/Loadable';
import TagPage from 'containers/TagPage/Loadable';
import StyleguidePage from 'containers/StyleguidePage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/work/:slug" component={ShowPage} />
        <Route exact path="/tags/:slug" component={TagPage} />
        <Route exact path="/styleguide" component={StyleguidePage} />
        <Route exact path="/styleguide/:slug" component={StyleguidePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
