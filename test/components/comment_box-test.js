/**
 * Created by albertwchang on 4/12/16.
 */
var {renderComponent, expect} = require('../test_helper');
var CommentBox = require('../../src/components/comment_box');
var component;

beforeEach(() => {
	component = renderComponent(CommentBox);
});

describe(':: [ui] COMMENT BOX ::', () => {
	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});
	it('has a Text Area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a Button', () => {
		expect(component.find('button')).to.exist;
	});
	describe('1. Entering some text...', () => {
		let textArea;
		beforeEach(() => {
			textArea = component.find('textarea');
			textArea.simulate('change', 'new comment');
		});
		it('Shows text in the text area', () => {
			expect(textArea).to.have.value('new comment');
		});
		it('Clears input after being submitted', () => {
			component.simulate('submit');
			expect(textArea).to.be.value('');
		});
	});
})
