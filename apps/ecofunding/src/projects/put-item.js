import AWS from "aws-sdk";
import { v4 } from "uuid";
const dynamodb = new AWS.DynamoDB.DocumentClient();

export const createProjectHandler = async (event) => {
	const body = JSON.parse(event.body);

	// Verificar si el creatorId existe en la tabla de usuarios
	const userParams = {
		TableName: process.env.USER_TABLE, // Asegúrate de que USER_TABLE esté definido en el entorno
		Key: { userId: body.creatorId },
	};

	try {
		const userData = await dynamodb.get(userParams).promise();
		if (!userData.Item) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: "Creator does not exist" }),
			};
		}

		// Crear el proyecto si el creador existe
		const projectParams = {
			TableName: process.env.PROJECT_TABLE,
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

		await dynamodb.put(projectParams).promise();
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
