import QueryHandlers from "./QueryHandlers";
import {QueryBus} from "../../application/queries/QueryBus";
import {Response} from "../../application/queries/Response";
import {Query} from "../../application/queries/Query";
import {QueryHandler} from "../../application/queries/QueryHandler";
import {QueryHandlerNotRegisteredError} from "../../application/queries/QueryHandlerNotRegisteredError";

export class InMemoryQueryBus implements QueryBus {
    constructor(private readonly queryHandlers: QueryHandlers) {
    }

    async ask<R extends Response>(query: Query): Promise<R> {
        const handler = this.queryHandlers.get(query);

        this.ensureHandlerExists(handler, query);

        const response = await handler.handle(query);
        return response as R;
    }

    private ensureHandlerExists(handler: QueryHandler<Query, Response>, query: Query) {
        if (!handler) {
            throw new QueryHandlerNotRegisteredError(query);
        }
    }

}