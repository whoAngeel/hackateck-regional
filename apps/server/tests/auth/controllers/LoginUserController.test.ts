import {afterEach, beforeAll, describe, expect, it} from "vitest";
import {Application} from "../../../src/app";
import httpStatus from "http-status";
import request from "supertest";
import {ErrorMapper} from "../../../src/shared/infrastructure/ErrorMapper";
import {InMemoryUserRepository} from "../../../src/friends/infrastructure/InMemoryUserRepository";
import {InvalidCredentialsError} from "../../../src/auth/domain/errors/InvalidCredentialsError";

describe("Login User Controller", async () => {
    let app: Application;
    let userRepository: InMemoryUserRepository;
    const registerRoute = '/api/auth/register';
    const loginRoute = '/api/auth/login';

    beforeAll(async () => {
        app = await Application.initialize();
        userRepository = app.container.get<InMemoryUserRepository>("UserRepository");

        const user = {
            fullName: 'John Doe',
            email: 'johnDoe.com',
            password: 'securePassword123',
        }

        await request(app.server)
            .post(registerRoute)
            .set('Accept', 'application/json')
            .send(user);

        expect(userRepository.count()).toBe(1);
        expect(await userRepository.checkPassword(user.email, user.password)).toBe(true);
    });

    afterEach(async () => {
        app = await Application.initialize();
        userRepository = app.container.get<InMemoryUserRepository>("UserRepository");
    });

    it('should log in an user successfully', async () => {
        const user = {
            fullName: 'John Doe',
            email: 'johnDoe.com',
            password: 'securePassword123',
        }
        const expectedStatus = httpStatus.OK;
        const expectedResponse = {
            user: {
                id: expect.any(String),
                email: user.email,
                fullName: user.fullName,
            },
            token: expect.any(String)
        };

        const actualResponse = await request(app.server)
            .post(loginRoute)
            .set('Accept', 'application/json')
            .send({email: user.email, password: user.password});

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual(expectedResponse);
    })

    it('should validate an invalid password', async () => {
        const user = {
            fullName: 'John Doe',
            email: 'johnDoe.com',
            password: 'securePassword123',
        }
        const invalidPassword = 'invalid-password';
        const expectedStatus = httpStatus.UNAUTHORIZED;
        const error = new InvalidCredentialsError();
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error).toJson();

        const actualResponse = await request(app.server)
            .post(loginRoute)
            .set('Accept', 'application/json')
            .send({email: user.email, password: invalidPassword});

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual(expectedResponse);
    })

    it('should validate an invalid email', async () => {
        const user = {
            fullName: 'John Doe',
            email: 'johnDoe.com',
            password: 'securePassword123',
        }
        const invalidEmail = 'invalidEmail@email.com';
        const expectedStatus = httpStatus.UNAUTHORIZED;
        const error = new InvalidCredentialsError();
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error).toJson();

        const actualResponse = await request(app.server)
            .post(loginRoute)
            .set('Accept', 'application/json')
            .send({email: invalidEmail, password: user.password});

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual(expectedResponse);
    })
})
