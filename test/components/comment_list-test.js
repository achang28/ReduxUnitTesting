/**
 * Created by albertwchang on 4/12/16.
 */
var {renderComponent, expect} = require('../test_helper');
var CommentList = require('../../src/components/comment_list');
var component;

describe(':: Comment List ::', () => {
	beforeEach(() => {
		const props = {
			comments: ['Hello there', 'learning sux', 'Recycling is good!']
		};
		component = renderComponent(CommentList, null, props);
	});
	it('Shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(3);
	});
});
