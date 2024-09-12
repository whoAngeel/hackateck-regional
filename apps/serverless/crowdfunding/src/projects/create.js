const dbclient = require("../common/dbclient.js");
const { v4: uuidv4 } = require("uuid");
const { error, success } = require("..//common/response.js");

module.exports.handler = async (event) => {
	const { name, fundingGoal, category } = JSON.parse(event.body);

	const id = uuidv4();

	const newProject = {
		id,
		name,
		fundingGoal,
		category,
		createdAt: new Date().toISOString(),
	};

	const params = {
		TableName: process.env.DYNAMODB_TABLE_PROJECTS,
		Item: newProject,
	};

	try {
		await dbClient.put(params).promise();
		return success(newProject);
	} catch (err) {
		return error("Could not create project", 500);
	}
};
