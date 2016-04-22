import jsdom from 'jsdom';
import jquery from 'jquery';
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers/indexR';
import chaiJquery from 'chai-jquery';
var _ = require('lodash');

// Setup testing environment to run like browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that renders a given React class
var renderComponent = (ComponentClass, props = {}, state = {}) => {
	var componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	);
	return $(ReactDOM.findDOMNode(componentInstance));
};

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}

	var event = TestUtils.Simulate[eventName];
	event(this[0]);
}

// Setup chai-jquery
chaiJquery(chai, chai.util, $);
export { renderComponent, expect };
