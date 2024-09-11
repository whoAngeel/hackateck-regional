import {afterEach, describe, expect, it} from "vitest";
import {Application} from "../../../src/app";
import httpStatus from "http-status";
import request from "supertest";
import {UserMother} from "../../friends/UserMother";
import {ErrorMapper} from "../../../src/shared/infrastructure/ErrorMapper";
import {InMemoryUserRepository} from "../../../src/friends/infrastructure/InMemoryUserRepository";
import {InMemoryAuthRepository} from "../../../src/auth/infrastructure/repositories/InMemoryAuthRepository";
import {RequiredValuesError} from "../../../src/shared/infrastructure/RequiredValuesError";
import {InvalidUUIDError} from "../../../src/shared/domain/errors/InvalidUUIDError";
import {InvalidFullNameError} from "../../../src/friends/domain/errors/InvalidFullNameError";
import {InvalidUserNameError} from "../../../src/friends/domain/errors/InvalidUserNameError";
import {InvalidEmailAddressError} from "../../../src/friends/domain/errors/InvalidEmailAddressError";
import {UserId} from "../../../src/friends/domain/entities/UserId";
import {EmailAlreadyTakenError} from "../../../src/friends/domain/errors/EmailAlreadyTakenError";
import {Email} from "../../../src/friends/domain/value-objects/Email";

describe("RegisterUserController", async () => {
    let app = await Application.initialize();
    let userRepository = app.container.get<InMemoryUserRepository>("UserRepository");
    let authRepository = app.container.get<InMemoryAuthRepository>("AuthRepository");
    const route = '/api/auth/register';

    afterEach(async () => {
        app = await Application.initialize();
        authRepository = app.container.get<InMemoryAuthRepository>("AuthRepository");
        userRepository = app.container.get<InMemoryUserRepository>("UserRepository");
    })

    it('should create a user successfully', async () => {
        const user = UserMother.normal();
        const expectedStatus = httpStatus.CREATED;
        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedStatus);
        expect(actualResponse.body).toEqual({});

        const createdUser = userRepository.users[0].toPrimitives();
        expect(user).toMatchObject(createdUser);

        expect(await authRepository.checkPassword(user.email, user.password)).toBe(true);
    })

    it('should not create an user because of missing values', async () => {
        const user = UserMother.missingFullName();
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

    it('should not create a user because id validation error', async () => {
        const user = UserMother.withInvalidId();
        const error = new InvalidUUIDError(user.id);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body).toEqual(expectedResponse.toJson());
    })

    it('should not create a user because full name validation error', async () => {
        const user = UserMother.withInvalidFullName();
        const error = new InvalidFullNameError(user.fullName);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body).toEqual(expectedResponse.toJson());
    })

    it('should not create a user because username validation error', async () => {
        const user = UserMother.withInvalidUsername();
        const error = new InvalidUserNameError(user.username);
        const expectedResponse = ErrorMapper.mapDomainErrorToProblemDetails(error);

        const actualResponse = await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(user);

        expect(actualResponse.status).toEqual(expectedResponse.status);
        expect(actualResponse.body.detail).toContain(user.username);
    })

    it('should not create a user because email validation error', async () => {
        const user = UserMother.withInvalidEmail();
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
            id: UserId.create().value,
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            username: 'johnny',
            password: 'securePassword123',
        };

        const newUser = {
            id: UserId.create().value,
            fullName: 'Carlos',
            email: userRegistered.email,
            username: 'carlos123',
            password: 'passwordCarlos123'
        };

        await request(app.server)
            .post(route)
            .set('Accept', 'application/json')
            .send(userRegistered);

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
        expect(userRegistered).toMatchObject(userInRepository!.toPrimitives());
    })
})
