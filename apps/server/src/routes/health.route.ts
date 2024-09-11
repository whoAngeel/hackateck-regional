import {Express} from 'express';
import {ContainerBuilder} from "node-dependency-injection";
import {HealthController} from "../shared/infrastructure/controllers/HealthController";

export const register = async (app: Express, container: ContainerBuilder) => {
    const healthController = container.get<HealthController>('HealthController');
    app.get('/health', healthController.run.bind(healthController));
};