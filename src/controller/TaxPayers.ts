import {levelTaxRate, taxRate} from "./ManagerTaxPayers";

export class TaxPayers {
    private _name: string;
    private _identify: string;
    private _phoneNumber: string;
    private _gmail: string;
    private _taxableIncome: string;
    private _dependant: string;
    private _taxCode: string;

    constructor(name: string, identify: string, phoneNumber: string, gmail: string, taxableIncome: string, dependant: string, taxCode: string) {
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

    setIdentify(value: string) {
        this._identify = value;
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

    getTaxableIncome(): string {
        return this._taxableIncome;
    }

    setTaxableIncome(value: string) {
        this._taxableIncome = value;
    }

    getDependant(): string {
        return this._dependant;
    }

    setDependant(value: string) {
        this._dependant = value;
    }

    getTaxCode(): string {
        return this._taxCode;
    }

    setTaxCode(value: string) {
        this._taxCode = value;
    }

    showPersonalTaxIncome() {
        let familyCircumstanceDeductions: number = 11000000;
        let dependantDeductions: number = +this.getDependant() * 4400000;
        // let compulsoryInsurance: number = 0.105;
        let deductions: number = familyCircumstanceDeductions + dependantDeductions;
        let assessableIncome: number = +this.getTaxableIncome() - deductions;
        let personalLevelTaxRateIncomeTax: number = 0;
        switch (true) {
            case assessableIncome <= 0:
                personalLevelTaxRateIncomeTax = 0;
                break;
            case assessableIncome <= levelTaxRate.level1:
                personalLevelTaxRateIncomeTax = Math.ceil(assessableIncome * 0.05)
                break;
            case assessableIncome <= levelTaxRate.level2:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level1) * 0.1) + taxRate.rate1
                break;
            case assessableIncome <= levelTaxRate.level3:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level2) * 0.15) + taxRate.rate1 + taxRate.rate2
                break;
            case assessableIncome <= levelTaxRate.level4:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level3) * 0.2) + taxRate.rate1 + taxRate.rate2 + taxRate.rate3
                break;
            case assessableIncome <= levelTaxRate.level5:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level4) * 0.25) + taxRate.rate1 + taxRate.rate2 + taxRate.rate3 + taxRate.rate4
                break;
            case assessableIncome <= levelTaxRate.level6:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level5) * 0.3) + taxRate.rate1 + taxRate.rate2 + taxRate.rate3 + taxRate.rate4 + taxRate.rate5
                break;
            case assessableIncome <= levelTaxRate.level7:
                personalLevelTaxRateIncomeTax = Math.ceil((assessableIncome - levelTaxRate.level6) * 0.35) + taxRate.rate1 + taxRate.rate2 + taxRate.rate3 + taxRate.rate4 + taxRate.rate5 + taxRate.rate6
                break;
        }
        return `${personalLevelTaxRateIncomeTax.toLocaleString()} VND`;
    }

    showInfoTaxPayers() {
        console.log(`--- Personal Infomation: ---`)
        console.log(`+ Name: ${this.getName()}`)
        console.log(`+ Identify: ${this.getIdentify()}`)
        console.log(`+ Phone Number: ${this.getPhoneNumber()}`)
        console.log(`+ Gmail: ${this.getGmail()}`)
        console.log(`+ Taxable Income: ${this.getTaxableIncome().toLocaleString()}`)
        console.log(`+ Dependant: ${this.getDependant()}`)
        console.log(`+ Tax Code: ${this.getTaxCode()}`)
        console.log(`+ Personal Income Tax: ${this.showPersonalTaxIncome()}`)
    }
}
