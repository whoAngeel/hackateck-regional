import {UserPrimitive} from "./User";

export class LoginUserResponse {
    constructor(
        public readonly token: string,
        public readonly user: UserPrimitive
    ) {
    }
}