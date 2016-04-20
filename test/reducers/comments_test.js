/**
 * Created by albertwchang on 4/18/16.
 */
var { expect } = require('../test_helper');
var commentReducer = require('../../src/reducers/comments');
var { SAVE_COMMENT } = require('../../src/actions/types');

decribe(':: Comments Reducer ::', () => {
	it('accepts an action w/ unknown type', () => {
		expect(commentReducer())
	});

	it('handles action w/ type SAVE_COMMENT', () => {

	});
})
