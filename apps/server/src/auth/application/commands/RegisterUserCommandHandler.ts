import {RegisterUserCommand} from "./RegisterUserCommand";
import {CommandHandler} from "../../../shared/application/commands/CommandHandler";
import {AuthRepository} from "../../domain/AuthRepository";
import {CommandBus} from "../../../shared/application/commands/CommandBus";
import {CreateUserCommand} from "../../../friends/application/create/CreateUserCommand";
import {RequiredValuesValidator} from "../../../shared/infrastructure/RequiredValuesValidator";
import {InvalidPasswordError} from "../../domain/errors/InvalidPasswordError";
import {Command} from "../../../shared/application/commands/Command";
export class RegisterUserCommandHandler implements CommandHandler<RegisterUserCommand> {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly commandBus: CommandBus
    ) {
    }

    async handle(command: RegisterUserCommand): Promise<void> {
        this.ensureDefinedValues(command);
        this.validatePassword(command.password);

        const createUserCommand = new CreateUserCommand({
            id: command.id,
            fullName: command.fullName,
            email: command.email,
            username: command.username
        });

        await Promise.all([
            this.commandBus.dispatch(createUserCommand),
            this.authRepository.assignPassword(command.email, command.password)
        ])
    }

    private ensureDefinedValues(command: RegisterUserCommand) {
        RequiredValuesValidator.validate(command, [
            'id',
            'fullName',
            'email',
            'username',
            'password'
        ]);
    }

    private validatePassword(password: string) {
        if (!password || password.length < 8) {
            throw new InvalidPasswordError(password);
        }
    }

    subscribedTo(): Command {
        return RegisterUserCommand;
    }
}