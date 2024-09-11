import {Query} from "../../../shared/application/queries/Query";

export class RegisterUserQuery extends Query {
    constructor(
        public readonly fullName: string,
        public readonly email: string,
        public readonly password: string
    ) {
        super();
    }

    toPrimitives() {
        return {
            fullName: this.fullName,
            email: this.email,
            password: this.password
        }
    }
}