import {ContainerBuilder, Reference} from "node-dependency-injection";
import {InMemoryUserRepository} from "../friends/infrastructure/InMemoryUserRepository";
import {CreateUserCommandHandler} from "../friends/application/create/CreateUserCommandHandler";
import {LogOnUserCreated} from "../friends/application/create/LogOnUserCreated";

export default function registerFriendsDependencies(container: ContainerBuilder) {
    container.register('UserRepository', InMemoryUserRepository)
    container.register('CreateUserCommandHandler', CreateUserCommandHandler)
        .addArgument(new Reference('UserRepository'))
        .addArgument(new Reference('EventBus'))
        .addTag('commandHandler')

    container.register('LogOnUserCreated', LogOnUserCreated).addTag('domainEventSubscriber')

    return container;
}