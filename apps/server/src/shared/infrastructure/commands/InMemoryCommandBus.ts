import CommandHandlers from "./CommandHandlers";
import {CommandBus} from "../../application/commands/CommandBus";
import {CommandHandler} from "../../application/commands/CommandHandler";
import {Command} from "../../application/commands/Command";
import {CommandHandlerNotRegisteredError} from "../../application/commands/CommandHandlerNotRegisteredError";

export class InMemoryCommandBus implements CommandBus {
    constructor(private readonly commandHandlers: CommandHandlers) {
    }

    async dispatch(command: Command): Promise<void> {
        const handler = this.commandHandlers.get(command);

        this.ensureHandlerExists(handler, command);

        await handler.handle(command);
    }

    private ensureHandlerExists(handler: CommandHandler<Command>, command: Command) {
        if (!handler) {
            throw new CommandHandlerNotRegisteredError(command);
        }
    }

}