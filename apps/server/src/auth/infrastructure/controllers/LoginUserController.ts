import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../../../shared/infrastructure/controllers/Controller";
import {QueryBus} from "../../../shared/application/queries/QueryBus";
import {LoginUserQuery} from "../../application/queries/LoginUserQuery";
import {LoginUserResponse} from "../../application/queries/LoginUserResponse";

type LoginUserRequest = {
    email: string;
    password: string;
};

export class LoginUserController extends Controller {
    constructor(private readonly queryBus: QueryBus) {
        super();
    }

    async run(req: Request<LoginUserRequest>, res: Response) {
        const response = await this.loginUser(req);
        if (response instanceof ProblemDetails) {
            res.status(response.status).json(response.toJson());
        } else {
            res.status(httpStatus.OK).json(response);
        }
    }

    private async loginUser({body}: Request<LoginUserRequest>): Promise<ProblemDetails | LoginUserResponse> {
        try {
            const loginUserQuery = new LoginUserQuery(
                body.email,
                body.password
            );

            return await this.queryBus.ask<LoginUserResponse>(loginUserQuery);
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
