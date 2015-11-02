import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubHeader from '../component/Sub/SubHeader.react';
import { Link } from 'react-router';

class SubContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>This is SubContainer</span>
        <SubHeader />
      </div>
    );
  }
}

SubContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
  return {
    loading: state.load.loading,
    error: state.load.error
  };
}

export default connect(mapStateToProps)(SubContainer);