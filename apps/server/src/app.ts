import getServer from './server';
import {Express} from "express";

export class Application {
    readonly server: Express;

    constructor() {
        this.server = getServer();
    }

    start(port?: string): void {
        port = port || process.env.PORT || '3000';
        this.server.listen(port, () => {
            console.log(
                `\tBackend is running at http://localhost:${port} in ${this.server.get('env')} mode`
            );
            console.log('\tPress CTRL-C to stop\n');
        });
    }
}