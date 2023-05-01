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
    private listTaxPayers: TaxPayers[];

    constructor() {
        this.listTaxPayers = [];
    }

    getListTaxPayers(): TaxPayers[] {
        return this.listTaxPayers;
    }

    checkPayersDuplicate(taxCode: number) {
        this.listTaxPayers.forEach(elements => {
            if (taxCode === elements.getTaxCode()) {
                console.log(`This Tax payers with tax code: ${taxCode} was existed!`)
            } else {
                console.log(`This Tax payers can be add in list`)
            }
        })
    }

    addTaxPayers(name: string, identify: string, phoneNumber: string, gmail: string, taxableIncome: number, dependant: number, taxCode: number) {
        // this.checkPayersDuplicate(taxCode) : need to check TaxPayers with input taxCode before add in list!
        let newTaxPayers: TaxPayers = new TaxPayers(name, identify, phoneNumber, gmail, taxableIncome, dependant, taxCode);
        this.listTaxPayers.push(newTaxPayers);
    }

    editPhoneNumberOfTaxPayers(taxCode: number, phoneNumber: string) {
        this.listTaxPayers.forEach(elements => {
            if (taxCode === elements.getTaxCode()) {
                elements.setPhoneNumber(phoneNumber)
            } else {
                console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            }
        })
    }

    editGmailOfTaxPayers(taxCode: number, gmail: string) {
        this.listTaxPayers.forEach(elements => {
            if (taxCode === elements.getTaxCode()) {
                elements.setGmail(gmail);
            } else {
                console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            }
        })
    }

    editTaxableIncomeOfTaxPayers(taxCode: number, taxableIncome: number) {
        this.listTaxPayers.forEach(elements => {
            if (taxCode === elements.getTaxCode()) {
                elements.setTaxableIncome(taxableIncome);
            } else {
                console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            }
        })
    }

    editDependantOfTaxPayers(taxCode: number, dependant: number) {
        this.listTaxPayers.forEach(elements => {
            if (taxCode === elements.getTaxCode()) {
                elements.setDependant(dependant);
            } else {
                console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            }
        })
    }

    deleteTaxPayers(taxCode: number) {
        this.listTaxPayers.forEach((elements, index) => {
            if (taxCode === elements.getTaxCode()) {
                this.listTaxPayers.splice(index, 1);
                console.log(`This Tax payer with ${taxCode} deleted`)
            } else {
                console.log(`This Tax payer with ${taxCode} was not existed. Please re-enter Correct tax code!`);
            }
        })
    }
    findTaxPayers(name:string,identify:string){
        for (let i = 0; i < this.listTaxPayers.length; i++) {
            if (name === this.listTaxPayers[i].getName() && identify === this.listTaxPayers[i].getIdentify()) {
                return this.listTaxPayers[i]
            }
            else {
                console.log(`This Tax payer with name: ${name} and identify: ${identify} was not existed. Please re-enter Correct infomation!`);
            }
        }
    }
    calculatePersonalIncomeTax(name:string,identify:string){
        let taxPayers: TaxPayers | undefined = this.findTaxPayers(name,identify);
        if (taxPayers) {
            let familyCircumstanceDeductions: number = 11000000;
            let dependantDeductions: number = taxPayers.getDependant() * 4400000;
            let compulsoryInsurance: number = 0.105;
            let deductions: number = familyCircumstanceDeductions + dependantDeductions + compulsoryInsurance;
            let assessableIncome: number = taxPayers.getTaxableIncome() - deductions;
            let personalLevelTaxRateIncomeTax: number = 0;
            switch (true) {
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
            // Cần xử lí trường hợp tính thuế ra số âm (TNCT - các khoản trừ < 11tr)
            return `The Personal Income Tax is : ${personalLevelTaxRateIncomeTax.toLocaleString()} VND`;
        } else {
            return `The tax code need to calculate PIT is not existed!`
        }
    }
}