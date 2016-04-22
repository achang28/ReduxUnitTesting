import { combineReducers } from 'redux';
import commentsR from './commentsR';

var rootReducer = combineReducers({
  comments: commentsR
});

module.exports = rootReducer;
