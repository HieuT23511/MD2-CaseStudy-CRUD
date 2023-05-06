import {Account} from "./Account";

export class TaxPayersAccount extends Account {

    constructor(ID: string, password: string) {
        super(ID, password);
    }
    getID(): string {
        return this._ID;
    }
    setID(value: string) {
        this._ID = value;
    }

    getPassword(): string {
        return this._password;
    }
    setPassword(value: string) {
        this._password = value;
    }
}