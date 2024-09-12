const { v4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);
const tableName = process.env.PROJECT_TABLE;

export const createProjectHandler = async (event) => {
	const body = JSON.parse(event.body);

	// Verificar si el creatorId existe en la tabla de usuarios

	try {
		// Crear el proyecto si el creador existe
		const projectParams = {
			TableName: tableName,
			Item: {
				projectId: v4(),
				name: body.name,
				description: body.description,
				fundingGoal: body.fundingGoal,
				currentFunding: 0,
				creatorId: v4(),
				category: body.category,
				createdAt: new Date().toISOString(),
			},
		};

		await ddbDocClient.send(new PutCommand(projectParams));

		return {
			statusCode: 201,
			body: JSON.stringify({ message: "Project created successfully" }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: "Error creating project", error }),
		};
	}
};
