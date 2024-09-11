import {sign, verify} from "jsonwebtoken";
import {TokenGenerator} from "../../domain/TokenGenerator";
import {UserPrimitive} from "../../../friends/domain/entities/User";

export class JWTGenerator implements TokenGenerator {
    constructor(private readonly secret: string) {
    }

    async generate(payload: UserPrimitive): Promise<string> {
        return sign(payload, this.secret);
    }

    async validate(token: string): Promise<UserPrimitive> {
        return verify(token, this.secret) as UserPrimitive;
    }
}