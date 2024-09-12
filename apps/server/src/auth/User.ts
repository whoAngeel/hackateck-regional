import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import worldRepository from "../world/worldRepository";

export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly fullName: string,
        public readonly password: string,
        public worldId: string
    ) {
        this.validateValues()
    }

    static create(email: string, fullName: string, password: string): User {
        return new User(
            uuidv4(),
            email,
            fullName,
            bcrypt.hashSync(password, bcrypt.genSaltSync()),
            worldRepository.create()
        )
    }

    setWorldId(worldId: string): void {
        this.worldId = worldId;
    }

    toPrimitive(): UserPrimitive {
        return {
            id: this.id,
            email: this.email,
            fullName: this.fullName,
            worldId: this.worldId
        }
    }

    private validateValues() {
        if (!this.id) {
            throw new Error('User ID is required')
        }

        if (!this.worldId) {
            throw new Error('World ID is required')
        }

        if (!this.email) {
            throw new Error('User email is required')
        }

        if (!this.fullName) {
            throw new Error('User full name is required')
        }

        if (!this.password) {
            throw new Error('User password is required')
        }
    }
}

export type UserPrimitive = {
    id: string;
    email: string;
    fullName: string;
    worldId: string;
}