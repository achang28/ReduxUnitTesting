var React = require('react');
var CommentBox = require('./comment_box');
var CommentList = require('./comment_list');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<CommentBox />
				<CommentList />
			</div>
		)
	}
});

module.exports = App;
