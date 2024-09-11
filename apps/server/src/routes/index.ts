import { Router } from 'express';
import { ContainerBuilder } from "node-dependency-injection";
import {HealthController} from "../shared/infrastructure/controllers/HealthController";
import {RegisterUserController} from "../auth/infrastructure/controllers/RegisterUserController";
import {LoginUserController} from "../auth/infrastructure/controllers/LoginUserController";

export function registerRouteFiles(router: Router, container: ContainerBuilder) {
    const healthController = container.get<HealthController>('HealthController');
    router.get('/health', healthController.run.bind(healthController));

    const registerController = container.get<RegisterUserController>('RegisterUserController');
    router.post('/auth/register', registerController.run.bind(registerController));

    const loginController = container.get<LoginUserController>('LoginUserController');
    router.post('/auth/login', loginController.run.bind(loginController));
}