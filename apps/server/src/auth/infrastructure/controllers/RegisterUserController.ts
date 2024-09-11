import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../../../shared/infrastructure/controllers/Controller";
import {QueryBus} from "../../../shared/application/queries/QueryBus";
import {LoginUserResponse} from "../../application/queries/LoginUserResponse";
import {RegisterUserQuery} from "../../application/queries/RegisterUserQuery";

type RegisterUserRequest = {
    fullName: string;
    email: string;
    password: string;
};

export class RegisterUserController extends Controller {
    constructor(private readonly queryBus: QueryBus) {
        super();
    }

    async run(req: Request<RegisterUserRequest>, res: Response) {
        const response = await this.createUser(req);

        if (response instanceof ProblemDetails) {
            res.status(response.status).json(response.toJson());
        } else {
            res.status(httpStatus.CREATED).json(response);
        }
    }

    private async createUser({body}: Request<RegisterUserRequest>): Promise<ProblemDetails | LoginUserResponse> {
        try {
            const query = new RegisterUserQuery(
                body.fullName,
                body.email,
                body.password
            );

            return await this.queryBus.ask<LoginUserResponse>(query);
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
