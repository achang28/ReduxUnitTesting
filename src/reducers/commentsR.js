/**
 * Created by albertwchang on 4/18/16.
 */
import _ from 'lodash';
import { SAVE_COMMENT } from '../../src/actions/types';

var commentsReducer = function(state = [], action = {type: '', payload: null}) {
	var result;
	var {type, payload} = action;

	if (!Array.isArray(state))
		state = new Array(1);

	if (typeof action === 'object') {
		result = _.extend(action, {
			payload: !_.isNumber(payload) && _.isEmpty(payload) ? null : payload.toString(),
			type: (!type || _.isEmpty(type)) ? '' : type
		});
	} else result = action;

	return (result.type === SAVE_COMMENT) ? state.concat(result.payload || []) : state;
};

module.exports = commentsReducer;
