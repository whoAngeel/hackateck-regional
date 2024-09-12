const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);
const tableName = process.env.PROJECT_TABLE;
export const getAll = async (event) => {
	if (event.httpMethod !== "GET") {
		throw new Error(
			`getAllItems only accept GET method, you tried: ${event.httpMethod}`
		);
	}
	console.info("received: ", event);

	const params = {
		TableName: tableName,
	};
	let items = null;
	try {
		const data = await ddbDocClient.send(new ScanCommand(params));

		items = data.Items;
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
