import {ContainerBuilder, Reference} from "node-dependency-injection";
import {JWTGenerator} from "../auth/infrastructure/services/JWTGenerator";
import {LoginUserQueryHandler} from "../auth/application/queries/LoginUserQueryHandler";
import {RegisterUserController} from "../auth/infrastructure/controllers/RegisterUserController";
import {LoginUserController} from "../auth/infrastructure/controllers/LoginUserController";
import {RegisterUserQueryHandler} from "../auth/application/queries/RegisterUserQueryHandler";
export default function registerAuthDependencies(container: ContainerBuilder) {
    container.register("TokenGenerator", JWTGenerator)
        .addArgument("secret-token")

    container.register("LoginUserQueryHandler", LoginUserQueryHandler)
        .addArgument(new Reference('UserRepository'))
        .addArgument(new Reference('TokenGenerator'))
        .addTag('queryHandler')

    container.register("RegisterUserQueryHandler", RegisterUserQueryHandler)
        .addArgument(new Reference('UserRepository'))
        .addArgument(new Reference('EventBus'))
        .addArgument(new Reference('TokenGenerator'))
        .addTag('queryHandler')

    container.register('RegisterUserController', RegisterUserController)
        .addArgument(new Reference('QueryBus'))

    container.register('LoginUserController', LoginUserController)
        .addArgument(new Reference('QueryBus'))

    return container;
}