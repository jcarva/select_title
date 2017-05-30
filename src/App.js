import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// Require global style
require('./assets/style/base.sass');

// Pages Wrapper(NavigationBar and Footer)
import PagesWrapper from './pages/PagesWrapper'

// Pages
import Pages from './pages';

export default () => (
  <Router>
    <PagesWrapper>
      <Pages/>
    </PagesWrapper>
  </Router>
);
