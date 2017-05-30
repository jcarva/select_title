import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

// Require global style
require('./assets/style/base.sass');

// Pages Wrapper(NavigationBar and Footer)
import PagesWrapper from './pages/PagesWrapper'

// Pages
import Pages from './pages';

export default () => (
  <Provider store={configureStore()}>
    <Router>
      <PagesWrapper>
        <Pages/>
      </PagesWrapper>
    </Router>
  </Provider>
);
