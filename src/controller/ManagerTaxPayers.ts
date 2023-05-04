import {TaxPayers} from "./TaxPayers";

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
    findIndexByTaxCode(taxCode:number){
        return this.listTaxPayers.findIndex(elements => taxCode === elements.getTaxCode())
    }


    getListTaxPayers(): TaxPayers[] {
        return this.listTaxPayers;
    }

    checkTaxPayers(taxCode: number) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payers with tax code ${taxCode} can be add in list`)
        } else {
            console.log(`This Tax payers with tax code ${taxCode} was existed`)
        }
    }

    addTaxPayers(name: string, identify: string, phoneNumber: string, gmail: string, taxableIncome: number, dependant: number, taxCode: number) {
        if(this.findIndexByTaxCode(taxCode) === -1){
            let newTaxPayers: TaxPayers = new TaxPayers(name, identify, phoneNumber, gmail, taxableIncome, dependant, taxCode);
            this.listTaxPayers.push(newTaxPayers);
        } else {
            console.log(`This Tax payers with tax code ${taxCode} was existed`)
        }
    }

    editPhoneNumberOfTaxPayers(taxCode: number, phoneNumber: string) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setPhoneNumber(phoneNumber);
        }
    }

    editGmailOfTaxPayers(taxCode: number, gmail: string) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setGmail(gmail);
        }
    }

    editTaxableIncomeOfTaxPayers(taxCode: number, taxableIncome: number) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setTaxableIncome(taxableIncome);
        }
    }

    editDependantOfTaxPayers(taxCode: number, dependant: number) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            this.listTaxPayers[this.findIndexByTaxCode(taxCode)].setDependant(dependant);
        }
    }

    deleteTaxPayers(taxCode: number) {
        if(this.findIndexByTaxCode(taxCode)===-1){
            console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
        } else {
            this.listTaxPayers.splice(this.findIndexByTaxCode(taxCode),1);
        }
    }
    findTaxPayers(name:string,identify:string){
        for (let i = 0; i < this.listTaxPayers.length; i++) {
            if (name === this.listTaxPayers[i].getName() && identify === this.listTaxPayers[i].getIdentify()) {
                return this.listTaxPayers[i]
            }
        }
            console.log(`This Tax payer with name: ${name} and identify: ${identify} was not existed. Please re-enter Correct information!`);
    }
    calculatePersonalIncomeTax(name:string,identify:string) :void{
        let taxPayers: TaxPayers | undefined = this.findTaxPayers(name,identify);
        if (taxPayers) {
            let familyCircumstanceDeductions: number = 11000000;
            let dependantDeductions: number = taxPayers.getDependant() * 4400000;
            // let compulsoryInsurance: number = 0.105;
            let deductions: number = familyCircumstanceDeductions + dependantDeductions;
            let assessableIncome: number = taxPayers.getTaxableIncome() - deductions;
            let personalLevelTaxRateIncomeTax: number =0;
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
            console.log(`The Personal Income Tax of Tax payer with name: ${name} (identify: ${identify}) is : ${personalLevelTaxRateIncomeTax.toLocaleString()} VND`) ;
        }
    }
}