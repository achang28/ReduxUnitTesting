var {renderComponent, expect} = require('../test_helper');
var App = require('../../src/components/app');

describe(':: [ui] REACT APPLICATION :: ', () => {
	var component;
	beforeEach(() => {
		component = renderComponent(App);
	});
	it('Renders a Input Box', () => {
		expect(component.find('.comment-box')).to.exist;
	});
	it('Renders a List', () => {
		expect(component.find('.comment-list')).to.exist;
	});
});
