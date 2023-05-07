import {TaxPayers} from "./TaxPayers";
import {managerTax, readlineSync} from "../../Main";
import {Regex} from "../regex/Regex";

export enum levelTaxRate {
    level1 = 5000000,
    level2 = 10000000,
    level3 = 18000000,
    level4 = 32000000,
    level5 = 52000000,
    level6 = 80000000,
    level7 = Infinity
}

export enum taxRate {
    rate1 = 250000,
    rate2 = 500000,
    rate3 = 1200000,
    rate4 = 2800000,
    rate5 = 5000000,
    rate6 = 8400000
}

export class ManagerTaxPayers {
    private readonly listTaxPayers: TaxPayers[];

    constructor() {
        this.listTaxPayers = [];
    }

    showListTaxPayers(): TaxPayers[] {
        return this.listTaxPayers;
    }

    findIndexByTaxCode(taxCode: string) {
        return this.listTaxPayers.findIndex(elements => taxCode === elements.getTaxCode())
    }

    addTaxPayers(taxPayers: TaxPayers) {
        this.listTaxPayers.push(taxPayers);
    }

    registerTaxPayers() {
        let taxCode = readlineSync.question(`Input Tax Code of Tax Payers that needs to register: `);
        if (this.findIndexByTaxCode(taxCode) !== -1 || !Regex.validateTaxCode(taxCode)) {
            console.log(`This Tax payers with tax code ${taxCode} is invalid or existed!`);
            return
        }
        let name: string = readlineSync.question(`Input Name: `)
        if (!Regex.validateName(name)) {
            console.log(`This ${name} is invalid. Please re-enter!`);
            return;
        }
        let identify: string = readlineSync.question(`Input Identify: `)
        if (!Regex.validateIdentify(identify) || managerTax.checkIdentifyDuplicate(identify)) {
            console.log(`This ${identify} is invalid. Please re-enter!`);
            return;
        }
        let phoneNumber: string = readlineSync.question(`Input phone number: `)
        if (!Regex.validatePhoneNumber(phoneNumber)) {
            console.log(`This ${phoneNumber} is invalid. Please re-enter!`);
            return;
        }
        let gmail: string = readlineSync.question(`Input gmail: `)
        if (!Regex.validateEmail(gmail)) {
            console.log(`This ${gmail} is invalid. Please re-enter!`);
            return;
        }
        let taxableIncome: string = readlineSync.question(`Input Taxable Income: `)
        if (!Regex.validateTaxableIncome(taxableIncome)) {
            console.log(`This ${taxableIncome} is invalid. Please re-enter!`);
            return;
        }
        let dependant: string = readlineSync.question(`Input Dependant: `)
        if (!Regex.validateDependant(dependant)) {
            console.log(`This ${dependant} is invalid. Please re-enter!`);
            return;
        }
        let newTaxPayers: TaxPayers = new TaxPayers(name, identify, phoneNumber, gmail, taxableIncome, dependant, taxCode);
        this.addTaxPayers(newTaxPayers);
        console.log(`Add Taxpayer successfully`)
    }


    editPhoneNumberOfTaxPayers() {
        let taxCode = readlineSync.question(`Input Tax Code of Tax Payers that needs to edit: `);
        if (this.findIndexByTaxCode(taxCode) === -1) {
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            return
        }
        let phoneNumber = readlineSync.question(`Input new Phone Number: `);
        if (!Regex.validatePhoneNumber(phoneNumber)) {
            console.log(`This ${phoneNumber} is invalid. Please re-enter!`);
            return;
        }
        this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setPhoneNumber(phoneNumber);
        console.log(`Edit Phone Number successful!`)

    }

    editGmailOfTaxPayers() {
        let taxCode = readlineSync.question(`Input Tax Code of Tax Payers that needs to edit: `);
        if (this.findIndexByTaxCode(taxCode) !== -1) {
            let gmail = readlineSync.question(`Input new Gmail: `);
            if(!Regex.validateEmail(gmail)){
                console.log(`This ${gmail} is invalid. Please re-enter!`);
                return;
            }
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setGmail(gmail);
            console.log(`Edit Email successful`)
            return;
        }
        console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
    }

    editTaxableIncomeOfTaxPayers() {
        let taxCode = readlineSync.question(`Input Tax Code of Tax Payers that needs to edit: `);
        if (this.findIndexByTaxCode(taxCode) === -1) {
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            let taxableIncome = readlineSync.question(`Input new Taxable Income : `);
            if(!Regex.validateTaxableIncome(taxableIncome)){
                console.log(`This ${taxableIncome} is invalid. Please re-enter!`);
                return;
            }
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setTaxableIncome(taxableIncome);
            console.log(`Edit Taxable Income successful!`)
        }
    }

    editDependantOfTaxPayers() {
        let taxCode = readlineSync.question(`Input Tax Code of Tax Payers that needs to edit: `);
        if (this.findIndexByTaxCode(taxCode) === -1) {
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            let dependant = readlineSync.question(`Input new Dependant of Tax Payers: `);
            if(!Regex.validateDependant(dependant)){
                console.log(`This ${dependant} is invalid. Please re-enter!`);
                return;
            }
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setPhoneNumber(dependant);
            console.log(`Edit Dependant successful!`)
        }
    }

    deleteTaxPayers() {
        let taxCode: string = readlineSync.question(`Input Tax Code of Tax Payers that needs to delete: `)
        if (this.findIndexByTaxCode(taxCode) === -1) {
            console.log(`This Tax payer with ${taxCode} is invalid or existed. Please re-enter Correct tax code!`);
            return;
        }
        console.log(`---- Information of Tax Payers that you want to delete: `)
        console.log(this.findTaxPayersByTaxCode(taxCode));
        if (readlineSync.keyInYN()) {
            this.listTaxPayers.splice(this.findIndexByTaxCode(taxCode), 1);
            console.log(`This Tax payer with ${taxCode} was deleted! `)
        } else {
            this.deleteTaxPayers();
        }

    }

    findTaxPayersByIdentify() {
        let inputIdentify = readlineSync.question(`Input Identify of Tax Payers that needs to find: `)
        for (let i = 0; i < this.listTaxPayers.length; i++) {
            if (inputIdentify === this.listTaxPayers[i].getIdentify()) {
                return this.listTaxPayers[i];
            }
        }
        console.log(`This Tax payer with identify: '${inputIdentify}' is invalid. Please re-enter Correct information!`);
    }

    checkIdentifyDuplicate(identify: string): boolean {
        let index = this.listTaxPayers.findIndex(elements => identify === elements.getIdentify())
        return index !== -1;
    }

    findTaxPayersByTaxCode(taxCode: string) {
        return this.listTaxPayers.find(elements => elements.getTaxCode() === taxCode)
    }

    calculatePersonalIncomeTax(): void {
        let taxPayers: TaxPayers | undefined = this.findTaxPayersByIdentify();
        if (taxPayers) {
            let familyCircumstanceDeductions: number = 11000000;
            let dependantDeductions: number = +taxPayers.getDependant() * 4400000;
            let deductions: number = familyCircumstanceDeductions + dependantDeductions;
            let assessableIncome: number = +taxPayers.getTaxableIncome() - deductions;
            let personalLevelTaxRateIncomeTax: number = 0;
            switch (true) {
                case assessableIncome <= 0:
                    personalLevelTaxRateIncomeTax = 0;
                    break;
                case assessableIncome <= levelTaxRate.level1:
                    personalLevelTaxRateIncomeTax = assessableIncome * 0.05
                    break;
                case assessableIncome <= levelTaxRate.level2:
                    personalLevelTaxRateIncomeTax = (assessableIncome - levelTaxRate.level1) * 0.1 + taxRate.rate1
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
            console.log(`The Personal Income Tax of Tax payer: ${taxPayers.getName()} with identify: ${taxPayers.getIdentify()} is : ${personalLevelTaxRateIncomeTax.toLocaleString()} VND`);
        }
    }
}