import {Account} from "./Account";

export class TaxAdminAccount extends Account {

    constructor(ID: string, password: string) {
        super(ID, password);
    }

    getID(): string {
        return super.getID();
    }

    setID(value: string) {
        super.setID(value);
    }

    getPassword(): string {
        return super.getPassword();
    }

    setPassword(value: string) {
        super.setPassword(value);
    }
}