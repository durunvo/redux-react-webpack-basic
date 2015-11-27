import React, {Component, PropTypes} from 'react';
import ReactDOM, {renderToString} from 'react-dom/server';
import serialize from 'serialize-javascript';

/**
 * Wrapper components containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered routes components.
 *
 * The only thing this components doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {

  render() {
    const {component, store} = this.props;
    const content = component ? renderToString(component) : '';

    return (
      <html lang="en-us">
      <head>
        <title>My Redux</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
      <script src="/static/bundle.js"/>
      <script dangerouslySetInnerHTML={{__html: "window.__data=" + serialize(store.getState()) + ";"}} charSet="UTF-8"/>
      </body>
      </html>
    );
  }
}

Html.propTypes = {
  component: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired
};