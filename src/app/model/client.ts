import {Person} from "./Person";
import {Product} from "./Product";


export class Client extends Person {
    public products: Array<Product>;
    private ca: number;

    constructor(id: number, firstName: string, lastName?: string) {
        super(id, firstName, lastName);
    }

    public getNom(): string {
        return this.firstName + " " + this.lastName;
    }
}