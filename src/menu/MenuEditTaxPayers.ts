import {managerTax, pressEnterToBack, readlineSync} from "../../Main";
import {MenuAdmin} from "./MenuAdmin";

export class MenuEditTaxPayers {
    static option(){
        let menuEditTaxPayers: string[] = ['Edit Gmail', 'Edit Phone Number', 'Edit dependant', 'Edit Taxable Income'];
        let index = readlineSync.keyInSelect(menuEditTaxPayers);
        switch (index) {
            case 0:
                managerTax.editGmailOfTaxPayers();
                console.log(`Edit Gmail successfully!`)
                this.option()
                break;
            case 1:
                managerTax.editPhoneNumberOfTaxPayers();
                console.log(`Edit Phone Number successfully!`)
                this.option()
                break;
            case 2:
                managerTax.editDependantOfTaxPayers();
                console.log(`Edit Dependant successfully!`)
                this.option()
                break;
            case 3:
                managerTax.editTaxableIncomeOfTaxPayers();
                console.log(`Edit Taxable Income successfully!`)
                this.option()
                break
            default:
                if (readlineSync.keyInYN()) {
                    MenuAdmin.managerTaxPayers()
                }
        }
    }
}