import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Home from './Home';
import About from './About'
import NoMatch from './NoMatch';

export default () => (
  <div>
    <Switch>
      <Redirect exact from='/' to='/home'/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route component={NoMatch}/>
    </Switch>
  </div>
);
