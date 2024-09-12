import ProblemDetailsBuilder from "problem-details-http"

export abstract class Controller {
    errorResponse(error: unknown) {
        console.error(error);

        return ProblemDetailsBuilder.fromStatus(400).build();
    }
}