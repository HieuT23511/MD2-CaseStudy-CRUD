export class TaxPayers {
    private _name:string;
    private _identify: string;
    private _phoneNumber: string;
    private _gmail: string;
    private _taxableIncome: number;
    private _dependant : number;
    private _taxCode: number;

    constructor(name: string, identify: string, phoneNumber: string, gmail: string, taxableIncome: number, dependant: number, taxCode: number) {
        this._name = name;
        this._identify = identify;
        this._phoneNumber = phoneNumber;
        this._gmail = gmail;
        this._taxableIncome = taxableIncome;
        this._dependant = dependant;
        this._taxCode = taxCode;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getIdentify(): string {
        return this._identify;
    }


    getPhoneNumber(): string {
        return this._phoneNumber;
    }

    setPhoneNumber(value: string) {
        this._phoneNumber = value;
    }

    getGmail(): string {
        return this._gmail;
    }

    setGmail(value: string) {
        this._gmail = value;
    }

    getTaxableIncome(): number {
        return this._taxableIncome;
    }

    setTaxableIncome(value: number) {
        this._taxableIncome = value;
    }

    getDependant(): number {
        return this._dependant;
    }

    setDependant(value: number) {
        this._dependant = value;
    }

    getTaxCode(): number {
        return this._taxCode;
    }
    showPersonalTaxIncome(){

    }
}