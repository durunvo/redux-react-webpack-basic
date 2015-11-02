import React, {Component, PropTypes} from 'react';
import ReactDOM, {renderToString} from 'react-dom/server';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {

  render() {
    const {assets, component, store} = this.props;
    const content = component ? renderToString(component) : '';

    let styles;
    if(assets.styles){
      styles =
      {/* styles (will be present only in production with webpack extract text plugin) */}
      {Object.keys(assets.styles).map((style, key) =>
          <link href={assets.styles[style]} key={key} media="screen, projection"
                rel="stylesheet" type="text/css" charSet="UTF-8"/>
      )}
    }
    let script;
    if(assets.javascript){
      script = <script src={assets.javascript.main} charSet="UTF-8"/>;
    }

    return (
      <html lang="en-us">
      <head>
        <title>My Redux</title>

        {DocumentMeta.renderAsReact()}

        <link rel="shortcut icon" href="/favicon.ico" />

        {styles}
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
      <script src="/static/bundle.js"/>
      {/*<script dangerouslySetInnerHTML={{__html: "window.__data=" + serialize(store.getState()) + ";"}} charSet="UTF-8"/>*/}
      {script}
      </body>
      </html>
    );
  }
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired
};