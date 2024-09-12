import { LoginUserQuery } from "./LoginUserQuery";
import { LoginUserResponse } from "./LoginUserResponse";
import { QueryHandler } from "../../../shared/application/queries/QueryHandler";
import { UserRepository } from "../../../friends/domain/repositories/UserRepository";
import { TokenGenerator } from "../../domain/TokenGenerator";
import { InvalidCredentialsError } from "../../domain/errors/InvalidCredentialsError";
import { User } from "../../../friends/domain/entities/User";
import { Query } from "../../../shared/application/queries/Query";
import { Email } from "../../../friends/domain/value-objects/Email";

export class LoginUserQueryHandler implements QueryHandler<LoginUserQuery, LoginUserResponse> {

    constructor(private readonly userRepository: UserRepository,
        private readonly tokenGenerator: TokenGenerator
    ) {
    }

    async handle(query: LoginUserQuery): Promise<LoginUserResponse> {
        const user = await this.getUserByEmail(query.email);

        await this.ensureValidCredentials(query.email, query.password);

        const token = await this.tokenGenerator.generate(user.toPrimitives());

        return new LoginUserResponse(token, user.toPrimitives());
    }

    private async getUserByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findByEmail(new Email(email));

        if (!user) {
            throw new InvalidCredentialsError();
        }

        return user;
    }

    private async ensureValidCredentials(email: string, password: string) {
        const credentialsAreCorrect = await this.userRepository.checkPassword(email, password);

        if (!credentialsAreCorrect) {
            throw new InvalidCredentialsError();
        }
    }

    subscribedTo(): Query {
        return LoginUserQuery;
    }
}