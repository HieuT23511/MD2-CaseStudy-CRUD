export abstract class Account {
    protected _ID: string;
    protected _password: string;

    protected constructor(ID: string, password: string) {
        this._ID = ID;
        this._password = password;
    }

    abstract getID(): string

    abstract setID(value: string): void

    abstract getPassword(): string

    abstract setPassword(value: string): void
}