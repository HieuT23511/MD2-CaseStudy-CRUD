import {readlineSync} from "../../Main";
import {TaxPayers} from "../controller/TaxPayers";

export class MenuEditInformation {
    static option(taxPayers:TaxPayers) {
        let menuEditInformation: string [] = [
            'Edit Name',
            'Edit Identify',
            'Edit Phone Number',
            'Edit Gmail',
            'Edit Taxable Income',
            'Edit Dependant',
            'Edit Tax code'
        ]
        let indexMenuEditInfo = readlineSync.keyInSelect(menuEditInformation, `Selection function:`);
        switch (indexMenuEditInfo) {
            case 0:
                let name: string = readlineSync.question(`Enter new name: `)
                taxPayers.setName(name)
                this.option(taxPayers)
                break;
            case 1:
                let identify: string = readlineSync.question(`Enter new Identify: `)
                taxPayers.setIdentify(identify)
                this.option(taxPayers)
                break;
            case 2:
                let phoneNumber: string = readlineSync.question(`Enter new phone number: `)
                taxPayers.setPhoneNumber(phoneNumber)
                this.option(taxPayers)
                break;
            case 3:
                let gmail: string = readlineSync.question(`Enter new gmail: `)
                taxPayers.setGmail(gmail)
                this.option(taxPayers)
                break;
            case 4:
                let taxableIncome: number = +readlineSync.question(`Enter new taxable income: `)
                taxPayers.setTaxableIncome(taxableIncome)
                this.option(taxPayers)
                break;
            case 5:
                let dependant: number = +readlineSync.question(`Enter new dependant: `)
                taxPayers.setDependant(dependant)
                this.option(taxPayers)
                break;
            case 6:
                let taxCode: string = readlineSync.question(`Enter new tax code: `)
                taxPayers.setTaxCode(taxCode)
                this.option(taxPayers)
                break;
        }
    }
}