export class World {
    private days: number = 1;
    private lifespan: number = 2000;
    private co2: number = 100;

    constructor(public readonly id: string) {
    }

    setDays(days: number): void {
        this.days = days;
    }

    setLifespan(lifespan: number): void {
        this.lifespan = lifespan;
    }

    setCo2(co2: number): void {
        this.co2 = co2;
    }

    public addDay(): void {
        this.days++;
    }

    public restoreDays(): void {
        this.days = 0;
    }

    public reduceCo2(): void {
        this.co2--;
    }

    public increaseCo2(): void {
        this.co2++;
    }

    public reduceLifespan(): void {
        this.lifespan--;
    }

    public increaseLifespan(): void {
        this.lifespan++;
    }

    public getCo2(): number {
        return this.co2;
    }

    public getLifespan(): number {
        return this.lifespan;
    }

    public getDays(): number {
        return this.days;
    }

    public toPrimitive(): WorldPrimitive {
        return {
            id: this.id,
            days: this.days,
            lifespan: this.lifespan,
            co2: this.co2
        }
    }

}

export type WorldPrimitive = {
    id: string;
    days: number;
    lifespan: number;
    co2: number;
}