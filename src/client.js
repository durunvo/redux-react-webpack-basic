import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import ReduxStore from './store/ReduxStore';
import {Provider} from 'react-redux';
import {reduxReactRouter, ReduxRouter} from 'redux-router';
import AppRoute from './route/AppRoute';
import createHistory from 'history/lib/createBrowserHistory';

const store = ReduxStore('client', window.__data);

const component = <ReduxRouter routes={AppRoute} />;

render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('app')
);

