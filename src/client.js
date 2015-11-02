import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import ReduxStore from './store/ReduxStore';
import {Provider} from 'react-redux';
import {reduxReactRouter, ReduxRouter} from 'redux-router';
import AppRoute from './route/AppRoute';
import createHistory from 'history/lib/createBrowserHistory';
import { Parse } from 'parse';

const store = ReduxStore('client', window.__data);

const component = <ReduxRouter routes={AppRoute} />;

if(window.location.hostname.indexOf('dev') > -1){
  // DEV
  Parse.initialize("D62So7GSAmpKrat7pk72fmJR0BEKFGIgvIR8LQ6t", "7J4ekHlMMSy0wBgh8ERaTzthK6T7WtFgz7hbRBnW");
}else{
  // PROD
  Parse.initialize("YBxAvsMFnbD53ePuj1f2hqfo8mAgzA2Shlmis15t", "uhUMvEF9dAzbvFTbmzuGxrMcnLB1qGqBOWZGLPXs");
}

render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('app')
);

