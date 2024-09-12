import AWS from "aws-sdk";
const dynamodb = AWS.DynamoDB.DocumentClient();
export const getAll = async (event) => {
	console.log("received: ", event);

	const params = {
		TableName: process.env.PROJECT_TABLE,
	};
	try {
		const data = await dynamodb.scan(params).promise();
		let items = data.Items;
	} catch (error) {
		console.log("ERROR", error);
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify(items),
	};

	console.info(
		`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
	);
	return response;
};
