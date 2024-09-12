module.exports.success = (data) => {
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};

module.exports.error = (message, statusCode = 500) => {
	return {
		statusCode,
		body: JSON.stringify({ message }),
	};
};
