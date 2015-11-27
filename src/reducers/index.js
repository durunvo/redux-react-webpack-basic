import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import load from './load';

export default combineReducers({
  load,
  router
});