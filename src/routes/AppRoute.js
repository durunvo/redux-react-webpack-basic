import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/App.react';
import SubContainer from '../containers/SubContainer.react';
import MainContainer from '../containers/MainContainer.react';
import NotFound from '../containers/NotFound.react';

export default (
  <Route path="/" component={App}>

    <IndexRoute component={MainContainer}/>

    <Route path="main" component={MainContainer} />

    <Route path="sub" component={SubContainer} />

    <Route path="*" component={NotFound} status={404} />

  </Route>
);
