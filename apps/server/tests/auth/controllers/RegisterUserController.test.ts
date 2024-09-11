import {afterEach, describe, expect, it} from "vitest";
import {Application} from "../../../src/app";
import httpStatus from "http-status";
import request from "supertest";
import {ErrorMapper} from "../../../src/shared/infrastructure/ErrorMapper";
import {InMemoryUserRepository} from "../../../src/friends/infrastructure/InMemoryUserRepository";
import {RequiredValuesError} from "../../../src/shared/infrastructure/RequiredValuesError";
import {InvalidFullNameError} from "../../../src/friends/domain/errors/InvalidFullNameError";
import {InvalidEmailAddressError} from "../../../src/friends/domain/errors/InvalidEmailAddressError";
import {EmailAlreadyTakenError} from "../../../src/friends/domain/errors/EmailAlreadyTakenError";
import {Email} from "../../../src/friends/domain/value-objects/Email";

describe("RegisterUserController", async () => {
    let app = await Application.initialize();
    let userRepository = app.container.get<InMemoryUserRepository>("UserRepository");
    const route = '/api/auth/register';

    afterEach(async () => {
        app = await Application.initialize();
        userRepository = app.container.get<InMemoryUserRepository>("UserRepository");
    })

    it('should create a user successfully', async () => {
        const user = {
            fullName: 'John Doe',
            email: 'johnDoe@example.com',
            password: 'securePassword123',
        }
        const expectedStatus = httpStatus.CREATED;
        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual({
            user: {
                id: expect.any(String),
                email: user.email,
                fullName: user.fullName,
            },
            token: expect.any(String)
        });

        expect(await userRepository.checkPassword(user.email, user.password)).toBe(true);
    })

    it('should not create an user because of missing values', async () => {
        const user = {
            email: 'johnDoe@example.com',
            password: 'securePassword123',
        }
        const expectedStatus = httpStatus.BAD_REQUEST;
        const error = new RequiredValuesError(['fullName']);
        const expectedResponse = ErrorMapper.mapErrorToProblemDetails(error).toJson();

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual(expectedResponse);
    })

    it('should not create a user because full name validation error', async () => {
        const user = {
            fullName: 'John2342Doe',
            email: 'johnDoe@example.com',
            password: 'securePassword123',
        }
        const error = new InvalidFullNameError(user.fullName);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body).toEqual(expectedResponse.toJson());
    })


    it('should not create a user because email validation error', async () => {
        const user = {
            fullName: 'John Doe',
            email: 'johnDoe.com',
            password: 'securePassword123',
        }
        const error = new InvalidEmailAddressError(user.email);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body).toEqual(expectedResponse.toJson());
    })

    it('should not create a new user because email already taken error', async () => {
        const userRegistered = {
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            password: 'securePassword123',
        };

        await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(userRegistered);

        const newUser = {
            fullName: 'Carlos',
            email: userRegistered.email,
            password: 'passwordCarlos123'
        };

        const error = new EmailAlreadyTakenError(userRegistered.email);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(newUser);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body).toEqual(expectedResponse.toJson());

        const usersInRepository = userRepository.count();
        expect(usersInRepository).toBe(1);

        const userInRepository = await userRepository.findByEmail(new Email(userRegistered.email));
        expect(userInRepository).toBeDefined();
    })
})
