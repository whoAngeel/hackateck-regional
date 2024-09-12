import {Router} from 'express';
import {RegisterUserController} from "../auth/RegisterUserController";
import {LoginUserController} from "../auth/LoginUserController";
import {FindWorldController} from "../world/FindWorldController";
import {FindUsersController} from "../friends/FindUsersController";
import {JoinWorldController} from "../world/JoinWorldController";

export function registerRouteFiles(router: Router) {
    const registerController = new RegisterUserController();
    const loginController = new LoginUserController();
    router.post('/auth/register', registerController.run.bind(registerController));
    router.post('/auth/login', loginController.run.bind(loginController));

    const findByWorldIdController = new FindWorldController();
    router.get('/world', findByWorldIdController.run.bind(findByWorldIdController));

    const joinWorldController = new JoinWorldController();
    router.get('/world/join', joinWorldController.run.bind(joinWorldController));

    const findUsersController = new FindUsersController();
    router.get('/users', findUsersController.run.bind(findUsersController));
}