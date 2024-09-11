import {RegisterUserQuery} from "./RegisterUserQuery";
import {RequiredValuesValidator} from "../../../shared/infrastructure/RequiredValuesValidator";
import {Command} from "../../../shared/application/commands/Command";
import {UserRepository} from "../../../friends/domain/repositories/UserRepository";
import {User} from "../../../friends/domain/entities/User";
import {EventBus} from "../../../shared/domain/events/EventBus";
import {EmailAlreadyTakenError} from "../../../friends/domain/errors/EmailAlreadyTakenError";
import {UserId} from "../../../friends/domain/entities/UserId";
import {Password} from "../../../friends/domain/value-objects/Password";
import {Email} from "../../../friends/domain/value-objects/Email";
import {FullName} from "../../../friends/domain/value-objects/FullName";
import {TokenGenerator} from "../../domain/TokenGenerator";
import {LoginUserResponse} from "./LoginUserResponse";
import {QueryHandler} from "../../../shared/application/queries/QueryHandler";

export class RegisterUserQueryHandler implements QueryHandler<RegisterUserQuery, LoginUserResponse> {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly eventBus: EventBus,
        private readonly tokenGenerator: TokenGenerator
    ) {
    }

    async handle(query: RegisterUserQuery): Promise<LoginUserResponse> {
        this.ensureDefinedValues(query);

        const user = await this.createUser(query);

        await this.eventBus.publish(...user.pullDomainEvents());

        const token = await this.tokenGenerator.generate(user.toPrimitives());

        return new LoginUserResponse(token, user.toPrimitives());
    }

    private async createUser(query: RegisterUserQuery) {
        const email = new Email(query.email);
        await this.ensureEmailIsNotTaken(email);

        const hashedPassword = Password.hash(query.password);

        const user = User.create(
            UserId.create(),
            new FullName(query.fullName),
            email,
            new Password(hashedPassword)
        );

        await this.userRepository.add(user);
        return user;
    }

    private ensureDefinedValues(command: RegisterUserQuery) {
        RequiredValuesValidator.validate(command, [
            'fullName',
            'email',
            'password'
        ]);
    }

    private async ensureEmailIsNotTaken(email: Email) {
        const emailIsTaken = await this.userRepository.findByEmail(email)

        if (emailIsTaken) {
            throw new EmailAlreadyTakenError(email.value);
        }
    }

    subscribedTo(): Command {
        return RegisterUserQuery;
    }
}