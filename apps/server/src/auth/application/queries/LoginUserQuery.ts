import {Query} from "../../../shared/application/queries/Query";

export class LoginUserQuery extends Query {
    constructor(
        public readonly email: string,
        public readonly password: string
    ) {
        super();
    }
}