import {Account} from "./Account";

export class TaxPayersAccount extends Account {
    // _identify:string;

    constructor(ID: string, password: string) {
        super(ID, password);
        // this._identify = identify;
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