/**
 * Created by albertwchang on 4/18/16.
 */
var { expect } = require('../test_helper');
var commentsReducer = require('../../src/reducers/commentsR');
var { SAVE_COMMENT } = require('../../src/actions/types');
import _ from 'lodash';

describe(':: [reducer] COMMENTS ::', () => {
	describe('1. Return default state (empty Array)', () => {
		it('...null || undefined payload provided for payload', () => {
			let action = { type: SAVE_COMMENT, payload: null };
			expect(commentsReducer([], action)).to.be.instanceof(Array);
		});

		it('...no payload is provided at all', () => {
			let action = { type: SAVE_COMMENT };
			expect(commentsReducer([], action)).to.be.instanceof(Array);
		});

		it('...no arguments are provided at all', () => {
			expect(commentsReducer()).to.eql([]);
		});

		it('...only action argument is provided', () => {
			let action = { type: SAVE_COMMENT, payload: 'testing' };
			expect(commentsReducer(action)).to.eql([]);
		});

		it('...a non-primitive value is provided for payload', () => {
			let action = { type: SAVE_COMMENT, payload: {} };
			expect(commentsReducer([], action)).to.eql([]);
		});

		it('...\'type\' is not provided || null || undefined', () => {
			let action = { payload: 'testing 123' };
			expect(commentsReducer([], action)).to.eql([]);
		});
	});

	describe('2. Returns a valid state array', () => {
		it('...unallowed \'type\' && valid payload', () => {
			let action = { type: SAVE_COMMENT, payload: 'testing 123' };
			expect(commentsReducer([], action).length).not.to.equal(0);
		});

		it('...non-string number provided && valid \'type\'', () => {
			const value = 55.0;
			let action = {type: SAVE_COMMENT, payload: value };
			expect(_.last(commentsReducer([], action))).to.equal(value.toString());
		});
	});
});
