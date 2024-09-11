import {ValueObject} from "../../../shared/domain/values-objects/ValueObject";
import {InvalidPasswordError} from "../../../auth/domain/errors/InvalidPasswordError";
import * as bcrypt from "bcrypt";

export class Password extends ValueObject {
    constructor(readonly value: string) {
        super();
        this.ensureIsValid();
    }

    static hash(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync());
    }

    static async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    ensureIsValid() {
        if (!/^\$2[ayb]\$.{56}$/.test(this.value)) {
            throw new InvalidPasswordError(this.value);
        }
    }

    getEqualityComponents(): unknown[] {
        return [this.value];
    }
}