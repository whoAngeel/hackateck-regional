import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../shared/Controller";
import ProblemDetailsBuilder from "problem-details-http";
import worldRepository from "./worldRepository";
import userRepository from "../auth/userRepository";
import {UserPrimitive} from "../auth/User";

type WorldRequest = {
    joiningWorldId: string
    leavingWorldId: string
    userId: string
};

type WorldResponse = {
    id: string;
    days: number;
    lifespan: number;
    co2: number;
    members: UserPrimitive[];
};

export class JoinWorldController extends Controller {

    async run(req: Request<WorldRequest>, res: Response) {
        const response = await this.joinWorld(req);

        if (response instanceof ProblemDetails) {
            res.status(response.status).json(response.toJson());        } else {
            res.status(httpStatus.OK).json(response);
        }
    }

    private async joinWorld({body}: Request<WorldRequest>): Promise<ProblemDetails | WorldResponse> {
        try {
            const worldToJoin = worldRepository.findById(body.joiningWorldId);

            if (worldToJoin == undefined) {
                return ProblemDetailsBuilder.fromStatus(httpStatus.NOT_FOUND)
                    .detail("World does not exist")
                    .build();
            }

            const worldToLeave = worldRepository.findById(body.leavingWorldId);

            if (worldToLeave == undefined) {
                return ProblemDetailsBuilder.fromStatus(httpStatus.NOT_FOUND)
                    .detail("World does not exist")
                    .build();
            }

            const user = await userRepository.findById(body.userId);

            if (user == undefined) {
                return ProblemDetailsBuilder.fromStatus(httpStatus.NOT_FOUND)
                    .detail("User does not exist")
                    .build();
            }

            user.setWorldId(worldToJoin.id);

            await worldRepository.remove(worldToLeave.id);

            const users = await userRepository.findWorldMembers(worldToJoin.id);

            return {...worldToJoin.toPrimitive(), members: users.map(user => user.toPrimitive())};
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
