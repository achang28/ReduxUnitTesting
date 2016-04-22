import commentsR from './commentsR';
import { combineReducers } from 'redux';

var rootReducer = combineReducers({
  comments: commentsR
});

module.exports = rootReducer;
