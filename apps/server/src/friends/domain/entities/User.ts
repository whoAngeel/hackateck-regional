import {Entity} from "../../../shared/domain/entities/Entity";
import {UserId} from "./UserId";
import {UserCreated} from "../events/UserCreated";
import {Email} from "../value-objects/Email";
import {FullName} from "../value-objects/FullName";
import {Password} from "../value-objects/Password";

export class User extends Entity<UserId> {
    constructor(
        id: UserId,
        private fullName: FullName,
        private email: Email,
        private password: Password
    ) {
        super(id);
    }

    static create(id: UserId, fullName: FullName, email: Email, hashedPassword: Password): User {
        const user = new User(id, fullName, email, hashedPassword);

        user.addDomainEvent(UserCreated.create(user.toPrimitives()));

        return user;
    }

    getFullName(): FullName {
        return this.fullName;
    }

    getEmail(): Email {
        return this.email;
    }

    getPassword(): Password {
        return this.password;
    }

    toPrimitives(): UserPrimitive {
        return {
            id: this.id.value,
            fullName: this.fullName.value,
            email: this.email.value,
        }
    }
}

export type UserPrimitive = {
    id: string;
    fullName: string;
    email: string;
}