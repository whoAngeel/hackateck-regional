import {ContainerBuilder} from "node-dependency-injection";
import {InMemoryUserRepository} from "../friends/infrastructure/InMemoryUserRepository";
import {LogOnUserCreated} from "../friends/application/create/LogOnUserCreated";

export default function registerFriendsDependencies(container: ContainerBuilder) {
    container.register('UserRepository', InMemoryUserRepository)
    container.register('LogOnUserCreated', LogOnUserCreated).addTag('domainEventSubscriber')

    return container;
}