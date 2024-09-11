import {Request, Response} from 'express';
import {ProblemDetails} from "problem-details-http";
import {DomainError} from "../../domain/errors/DomainError";
import {ErrorMapper} from "../ErrorMapper";

export abstract class Controller {
    abstract run(req: Request, res: Response): Promise<void>;

    errorResponse(error: unknown): ProblemDetails {
        if (error instanceof DomainError) {
            return ErrorMapper.mapDomainErrorToProblemDetails(error);
        }

        if (error instanceof Error) {
            return ErrorMapper.mapErrorToProblemDetails(error);
        }

        return ProblemDetails.default(500);
    }
}
