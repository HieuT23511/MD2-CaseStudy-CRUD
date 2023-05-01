import {Account} from "./Account";

export class TaxPayersAccount extends Account {
    // _identify:string;

    constructor(ID: string, password: string) {
        super(ID, password);
        // this._identify = identify;
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