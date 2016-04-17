/**
 * Created by albertwchang on 4/12/16.
 */
var React = require('react');
var { connect } = require('react-redux');

var CommentList = (props) => {
	var comments = props.comments.map((comment, key) =>
		<li key={key}>{comment}</li>);
	return (
		<ul className="comment-list">{comments}</ul>
	);
};

var connection = connect((appState) => ({comments: appState.comments}));
module.exports = connection(CommentList);
