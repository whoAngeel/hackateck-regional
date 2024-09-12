import {World} from "./World";
import {v4} from "uuid";

class WorldRepository {
    private worlds: World[] = [];

    public create(): string {
        const world = new World(v4());
        this.worlds.push(world);
        return world.id;
    }

    findById(id: string): World | undefined {
        return this.worlds.find(world => world.id === id);
    }

    async remove(id: string): Promise<void> {
        this.worlds = this.worlds.filter(world => world.id !== id);
    }
}

const worldRepository = new WorldRepository();

export default worldRepository;