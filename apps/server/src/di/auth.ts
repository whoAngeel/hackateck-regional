import {ContainerBuilder, Reference} from "node-dependency-injection";
import {HashService} from "../auth/infrastructure/services/HashService";
import {JWTGenerator} from "../auth/infrastructure/services/JWTGenerator";
import {InMemoryAuthRepository} from "../auth/infrastructure/repositories/InMemoryAuthRepository";
import {LoginUserQueryHandler} from "../auth/application/queries/LoginUserQueryHandler";
import {RegisterUserCommandHandler} from "../auth/application/commands/RegisterUserCommandHandler";
import {RegisterUserController} from "../auth/infrastructure/controllers/RegisterUserController";
import {LoginUserController} from "../auth/infrastructure/controllers/LoginUserController";
export default function registerAuthDependencies(container: ContainerBuilder) {
    container.register('HashService', HashService)
    container.register("TokenGenerator", JWTGenerator)
        .addArgument("secret-token")

    container.register('AuthRepository', InMemoryAuthRepository)
        .addArgument(new Reference('HashService'))

    container.register("LoginUserQueryHandler", LoginUserQueryHandler)
        .addArgument(new Reference('AuthRepository'))
        .addArgument(new Reference('UserRepository'))
        .addArgument(new Reference('TokenGenerator'))
        .addTag('queryHandler')

    container.register("RegisterUserCommandHandler", RegisterUserCommandHandler)
        .addArgument(new Reference('AuthRepository'))
        .addArgument(new Reference('CommandBus'))
        .addTag('commandHandler')

    container.register('RegisterUserController', RegisterUserController)
        .addArgument(new Reference('CommandBus'))

    container.register('LoginUserController', LoginUserController)
        .addArgument(new Reference('QueryBus'))

    return container;
}