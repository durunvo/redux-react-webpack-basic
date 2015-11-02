import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';
import {reduxReactRouter as clientRouter} from 'redux-router';
import {reduxReactRouter as serverRouter} from 'redux-router/server';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import routes from '../route/AppRoute';

export default function (target, initialState = {}) {

  let router;

  if (target === 'client') {
    router = clientRouter({routes, createHistory: createBrowserHistory});
  } else if (target === 'server') {
    router = serverRouter({routes, createHistory: createMemoryHistory});
  }

  const middleware = [
    thunk
  ];
  const toolChain = [
    applyMiddleware(...middleware),
    router
  ];

  return compose(...toolChain)(createStore)(reducer, initialState);
};
