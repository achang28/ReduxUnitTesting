/**
 * Created by albertwchang on 4/13/16.
 */
var { expect } = require('../test_helper');
var { SAVE_COMMENT } = require('../../src/actions/types');
var { saveComment } = require('../../src/actions/index');
describe(':: [redux] ACTIONS ::', () => {
	describe('1. saveComment', () => {
		it('has the correct type', () => {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});
		it('has the correct payload', () => {
			const action = saveComment('hello world');
			expect(action.payload).to.equal('hello world');
		});
		it('uses 1st element of a provided list', () => {
			const action = saveComment([4, 'suck it']);
			expect(action.payload).to.equal(4);
		});
		it('provides an empty string for empty value || object', () => {
			const action = saveComment();
			expect(action.payload).to.have.value;
		});
	});
});
