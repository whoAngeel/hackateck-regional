import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../shared/Controller";
import userRepository from "../auth/userRepository";
import {UserPrimitive} from "../auth/User";

type FindUsersRequest = {
    fullName: string | undefined;
    email: string | undefined;
};

export class    FindUsersController extends Controller {
    async run(req: Request<FindUsersRequest>, res: Response) {
        const response = await this.findUsers(req);
        if (response instanceof ProblemDetails) {
            res.status(response.status).json(response.toJson());
        } else {
            res.status(httpStatus.OK).json(response);
        }
    }

    private async findUsers({body}: Request<FindUsersRequest>): Promise<ProblemDetails | UserPrimitive[]> {
        try {
            return (await userRepository.findByCriteria(body.fullName, body.email)).map(user => user.toPrimitive());
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}