import {Person} from "./Person";


export class Supplier extends Person {
    public bankAccountNumber: string;
    private companyName: string;

    constructor(id: number, firstName: string, lastName?: string) {
        super(id, firstName, lastName);
    }
}