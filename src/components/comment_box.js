/**
 * Created by albertwchang on 4/12/16.
 */
var React = require('react');

var CommentBox = React.createClass({
	getInitialState: function() {
		return { comment: '' };
	},
	onEnter: function(e) {
		this.setState({comment: e.target.value});
	},
	onSubmit: function(e) {
		e.preventDefault();
		this.setState({comment: ''});
	},
	render: function() {
		return (
			<form className="comment-box" onSubmit={this.onSubmit}>
				<textarea
					value={this.state.comment}
					onChange={this.onEnter} />
				<p>
					<button action="submit">Submit</button>
				</p>
			</form>
		);
	}
});

module.exports = CommentBox;
