import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../components/Main/MainHeader.react';
import {loadAndSuccess, loadAndFail} from '../reducers/load';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickFail = this.clickFail.bind(this);
  }

  clickSuccess(){
    const {dispatch} = this.props;
    dispatch(loadAndSuccess());
  }

  clickFail(){
    const {dispatch} = this.props;
    dispatch(loadAndFail());
  }

  render() {
    let successButton;
    let failButton;
    let loadingText;
    if(!this.props.loading){
      successButton = <button onClick={this.clickSuccess}>Success</button>;
      failButton = <button onClick={this.clickFail}>Fail</button>;
    }else{
      loadingText = <p>Loading</p>;
    }
    let status;
    if(this.props.error){
      status = <p>Error</p>;
    }

    return (
      <div>
        <span>This is MainContainer</span>
        <MainHeader />
        {loadingText}
        {status}
        {successButton}
        {failButton}
      </div>
    );
  }
}

MainContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    loading: state.load.loading,
    error: state.load.error
  };
}

export default connect(mapStateToProps)(MainContainer);
