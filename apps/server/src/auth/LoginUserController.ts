    import {Request, Response} from "express";
    import httpStatus from "http-status";
    import {ProblemDetails} from "problem-details-http";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {Controller} from "../shared/Controller";
import {LoginUserResponse} from "./LoginUserResponse";
import userRepository from "./userRepository";
import ProblemDetailsBuilder from "problem-details-http";

    type LoginUserRequest = {
        email: string;
        password: string;
    };

export class LoginUserController extends Controller {

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
            const user = await userRepository.findByEmail(body.email);

            if (user == undefined || !bcrypt.compareSync(body.password, user.password)) {
                return ProblemDetailsBuilder.fromStatus(httpStatus.UNAUTHORIZED)
                    .detail("Invalid email or password")
                    .build();
            }

            const token = jwt.sign(user.toPrimitive(), "secret-token")
            return new LoginUserResponse(token, user.toPrimitive());
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
