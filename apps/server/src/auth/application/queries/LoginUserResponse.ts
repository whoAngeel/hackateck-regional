import {UserPrimitive} from "../../../friends/domain/entities/User";

export class LoginUserResponse {
    constructor(
        public readonly token: string,
        public readonly user: UserPrimitive
    ) {
    }
}