import {UserRepository} from "../domain/repositories/UserRepository";
import {User} from "../domain/entities/User";
import {Email} from "../domain/value-objects/Email";
import {UserId} from "../domain/entities/UserId";
import {Password} from "../domain/value-objects/Password";

export class InMemoryUserRepository implements UserRepository {
    readonly users: User[];

    constructor() {
        this.users = [];
    }

    async checkPassword(email: string, password: string): Promise<boolean> {
       const user = await this.findByEmail(new Email(email));

       if(!user) {
           return false;
       }

       return Password.compare(password, user.getPassword().value);
    }

    getLastUserCreated(): User {
        return this.users[this.users.length - 1];
    }

    count(): number {
        return this.users.length;
    }

    async updateFromId(user: User): Promise<void> {
        const index = this.users.findIndex(storedUser => storedUser.id.equals(user.id));

        if (index !== -1) {
            this.users[index] = user;
        }
    }

    async add(user: User): Promise<void> {
        this.users.push(user);
    }

    async findByEmail(email: Email): Promise<User | null> {
        return this.users.find(user => user.getEmail().equals(email)) || null;
    }

    async findById(id: UserId): Promise<User | null> {
        return this.users.find(user => user.id.equals(id)) || null;
    }
}