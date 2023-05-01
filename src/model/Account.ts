export class Account {
    private _ID: string;
    private _password: string;

    constructor(ID: string, password: string) {
        this._ID = ID;
        this._password = password;
    }

    getID(): string {
        return this._ID;
    }
    setID(value:string){
        this._ID = value;
    }
    getPassword(): string {
        return this._password;
    }

    setPassword(value: string) {
        this._password = value;
    }
}