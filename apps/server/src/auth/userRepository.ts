import {User} from "./User";

class UserRepository {
    private users: User[] = [];

    public async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    public async findById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    public async findWorldMembers(worldId: string): Promise<User[]> {
        const users = [];

        for (const user of this.users) {
            if (user.worldId === worldId) {
                users.push(user);
            }
        }

        return users;
    }

    public async add(user: User): Promise<void> {
        this.users.push(user);
    }

    async findByCriteria(fullName: string | undefined, email: string | undefined): Promise<User[]> {
        const users = [];

        if (!fullName && !email) {
            return this.users;
        }

        for (const user of this.users) {
            if ((fullName && user.fullName.includes(fullName)) || (email && user.email.includes(email))) {
                users.push(user);
            }
        }

        return users;
    }
}

const userRepository = new UserRepository();

export default userRepository;