import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../shared/Controller";
import {LoginUserResponse} from "./LoginUserResponse";
import jwt from "jsonwebtoken";
import {User} from "./User";
import userRepository from "./userRepository";

type RegisterUserRequest = {
    fullName: string;
    email: string;
    password: string;
};

export class RegisterUserController extends Controller {
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
            const user = User.create(
                body.email,
                body.fullName,
                body.password
            );

            await userRepository.add(user);

            const token = jwt.sign(user.toPrimitive(), "secret-token")
            return new LoginUserResponse(token, user.toPrimitive());

        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
