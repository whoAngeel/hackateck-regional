import {ContainerBuilder, Reference} from "node-dependency-injection";
import {InMemoryEventBus} from "../shared/infrastructure/InMemoryEventBus";
import CommandHandlers from "../shared/infrastructure/commands/CommandHandlers";
import {InMemoryCommandBus} from "../shared/infrastructure/commands/InMemoryCommandBus";
import QueryHandlers from "../shared/infrastructure/queries/QueryHandlers";
import {InMemoryQueryBus} from "../shared/infrastructure/queries/InMemoryQueryBus";
import {HealthController} from "../shared/infrastructure/controllers/HealthController";

export default function registerSharedDependencies(container: ContainerBuilder){
    container.register('EventBus', InMemoryEventBus)
    container.register('CommandHandlers', CommandHandlers)
    container.register('CommandBus', InMemoryCommandBus).addArgument(new Reference('CommandHandlers'))
    container.register('QueryHandlers', QueryHandlers)
    container.register('QueryBus', InMemoryQueryBus).addArgument(new Reference('QueryHandlers'))
    container.register('HealthController', HealthController);

    return container;
}