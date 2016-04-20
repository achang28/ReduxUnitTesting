var {SAVE_COMMENT} = require('./types');

export function saveComment(data) {
	var comment;

	if (Array.isArray(data))
		comment = data[0];
	else if (typeof data !== 'object')
		comment = data;
	else
		comment = '';

	return {
		type: SAVE_COMMENT,
		payload: comment
	};
}
