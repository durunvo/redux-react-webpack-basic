import Express from 'express';
import React from 'react';
import path from 'path';
import {renderToString} from 'react-dom/server';
import Html from './view/Html.react';
import ReduxStore from './store/ReduxStore';
import {ReduxRouter} from 'redux-router';
import {reduxReactRouter, match} from 'redux-router/server';
import {Provider} from 'react-redux';
import AppRoute from './route/AppRoute';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = Express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
const env = process.env.NODE_ENV || 'development';


//webpack for create bundle.js for client
let config;
if(env === 'development'){
  //webpack will generate bundle.js faster in dev config
  config = require('../webpack.dev.config.js');
}else{
  //webpack will generate bundle.js slower in dev config
  config = require('../webpack.prod.config.js');
}
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use((req, res)=>{

  const store = ReduxStore('server');

  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  store.dispatch(match(req.originalUrl, function(error, redirectLocation, renderProps) {

    if (error) {
      res.send(500, error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      let component = (
        <Provider store={store}>
          <ReduxRouter />
        </Provider>
      );

      let html = <Html assets={{}} store={store} component={component} />;
      res.status(200).send('<!DOCTYPE HTML>\n' + renderToString(html));

    } else {
      res.send(404, 'Not found')
    }
  }));
});

app.listen(port, (error)=>{
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});