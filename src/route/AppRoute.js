import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../container/App.react';
import SubContainer from '../container/SubContainer.react';
import MainContainer from '../container/MainContainer.react';
import NotFound from '../container/NotFound.react';

export default (
  <Route path="/" component={App}>

    <IndexRoute component={MainContainer}/>

    <Route path="main" component={MainContainer} />

    <Route path="sub" component={SubContainer} />

    <Route path="*" component={NotFound} status={404} />

  </Route>
);
