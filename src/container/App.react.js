import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <div>
            <div>
              <Link to="/">App</Link>
            </div>
            <div>
              <ul >
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/sub">Sub</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    dispatch: state.dispatch
  };
}

export default connect(mapStateToProps)(App);
