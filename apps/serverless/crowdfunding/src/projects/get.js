const dbClient = require("../common/dbclient");
const { success, error } = require("../common/response.js");

module.exports.handler = async () => {
	const params = {
		TableName: process.env.DYNAMODB_TABLE_PROJECTS,
	};

	try {
		const result = await dbClient.scan(params).promise();
		return success(result.Items);
	} catch (err) {
		return error("Could not retrieve projects", 500);
	}
};
