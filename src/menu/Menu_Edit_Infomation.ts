import {managerTax, pressEnterToBack, readlineSync} from "../../Main";
import {TaxPayers} from "../controller/TaxPayers";
import {Regex} from "../regex/Regex";

export class MenuEditInformation {
    static option(taxPayers: TaxPayers) {
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
                if (!Regex.validateName(name)) {
                    console.log(`This ${name} is invalid. Please re-enter!`);
                    pressEnterToBack();
                } else {
                    taxPayers.setName(name);
                    console.log(`Edit name successful!`)
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 1:
                let identify: string = readlineSync.question(`Enter new Identify: `)
                if (!Regex.validateIdentify(identify) || managerTax.checkIdentifyDuplicate(identify)) {
                    console.log(`This ${identify} is invalid or existed. Please re-enter!`);
                    pressEnterToBack()
                } else {
                    taxPayers.setIdentify(identify)
                    console.log(`Edit Identify successful!`)
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 2:
                let phoneNumber: string = readlineSync.question(`Enter new phone number: `)
                if (!Regex.validatePhoneNumber(phoneNumber)) {
                    console.log(`This ${phoneNumber} is invalid. Please re-enter!`);
                    pressEnterToBack()
                } else {
                    taxPayers.setPhoneNumber(phoneNumber);
                    console.log(`Edit Phone number successful!`)
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 3:
                let gmail: string = readlineSync.question(`Enter new gmail: `)
                if (!Regex.validateEmail(gmail)) {
                    console.log(`This ${gmail} is invalid. Please re-enter!`);
                    pressEnterToBack();
                } else {
                    taxPayers.setGmail(gmail);
                    console.log(`Edit gmail successful!`);
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 4:
                let taxableIncome: string = readlineSync.question(`Enter new taxable income: `)
                if (!Regex.validateTaxableIncome(taxableIncome)) {
                    console.log(`This ${taxableIncome} is invalid. Please re-enter!`);
                    pressEnterToBack()
                } else {
                    taxPayers.setTaxableIncome(taxableIncome);
                    console.log(`Edit Taxable Income successful!`);
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 5:
                let dependant: string = readlineSync.question(`Enter new dependant: `)
                if (!Regex.validateDependant(dependant)) {
                    console.log(`This ${dependant} is invalid. Please re-enter!`);
                    pressEnterToBack();
                } else {
                    taxPayers.setDependant(dependant);
                    console.log(`Edit Dependant successful!`);
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
            case 6:
                let taxCode: string = readlineSync.question(`Enter new tax code: `)
                if (!Regex.validateTaxCode(taxCode)) {
                    console.log(`This ${taxCode} is invalid. Please re-enter!`);
                    pressEnterToBack();
                } else {
                    taxPayers.setTaxCode(taxCode);
                    console.log(`Edit taxCode successful!`)
                    pressEnterToBack();
                }
                this.option(taxPayers)
                break;
        }
    }
}