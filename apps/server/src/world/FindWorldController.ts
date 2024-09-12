import {Request, Response} from "express";
import httpStatus from "http-status";
import {ProblemDetails} from "problem-details-http";
import {Controller} from "../shared/Controller";
import ProblemDetailsBuilder from "problem-details-http";
import worldRepository from "./worldRepository";
import userRepository from "../auth/userRepository";
import {UserPrimitive} from "../auth/User";

type WorldRequest = {
    worldId: string
};

type WorldResponse = {
    id: string;
    days: number;
    lifespan: number;
    co2: number;
    members: UserPrimitive[];
};

export class FindWorldController extends Controller {

    async run(req: Request<WorldRequest>, res: Response) {
        const response = await this.getWorld(req);

        if (response instanceof ProblemDetails) {
            res.status(response.status).json(response.toJson());
        } else {
            res.status(httpStatus.OK).json(response);
        }
    }

    private async getWorld({body}: Request<WorldRequest>): Promise<ProblemDetails | WorldResponse> {
        try {
            const world = worldRepository.findById(body.worldId);

            if (world == undefined) {
                return ProblemDetailsBuilder.fromStatus(httpStatus.NOT_FOUND)
                    .detail("World does not exist")
                    .build();
            }

            const users = await userRepository.findWorldMembers(world.id);

            return {...world.toPrimitive(), members: users.map(user => user.toPrimitive())};
        } catch (error) {
            return this.errorResponse(error);
        }
    }
}
