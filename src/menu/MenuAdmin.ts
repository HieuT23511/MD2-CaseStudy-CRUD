import { managerAccount, managerTax, pressEnterToBack, readlineSync} from "../../Main";
import {MenuMain} from "./MenuMain";
import {MenuEditTaxPayers} from "./MenuEditTaxPayers";

const menuForAdmin: string[] = [
    'Manager Account',
    'Manager Tax Payers'
];
const menuManagerAccount: string[] = [
    'Show list Account',
    'Register Account',
    'Change Account Password',
    'Delete Account'
];
const menuManagerTaxPayers: string[] = [
    'Show list Tax Payers',
    'Calculate Personal Income Tax of Tax Payers',
    'Register Tax Payers',
    'Edit Info Tax Payers',
    'Delete Tax Payers'
]

export class MenuAdmin {
    static option() {
        let loop = true;
        while (loop) {
            let indexMenuForAdmin: number = readlineSync.keyInSelect(menuForAdmin, 'Select function:')
            switch (indexMenuForAdmin) {
                case 0:
                    this.managerAccount()
                    pressEnterToBack()
                    break;
                case 1:
                    this.managerTaxPayers()
                    pressEnterToBack()
                    break;
                default:
                    if (readlineSync.keyInYN(`Are you sure cancel?`)) {
                        loop = false;
                        break
                    }
            }
        }
    }

    static managerAccount() {
        let indexMenuManagerAccount: number = readlineSync.keyInSelect(menuManagerAccount, 'Select function:')
        switch (indexMenuManagerAccount) {
            case 0:
                console.table(managerAccount.showListAccount());
                pressEnterToBack();
                this.managerAccount()
                break;
            case 1:
                MenuMain.register();
                pressEnterToBack();
                this.managerAccount();
                break;
            case 2:
                managerAccount.changePassword();
                pressEnterToBack();
                this.managerAccount();
                break;
            case 3:
                managerAccount.deleteAccount();
                pressEnterToBack();
                this.managerAccount();
                break;
        }
    }

    static managerTaxPayers() {

        let indexMenuManagerTaxPayers: number = readlineSync.keyInSelect(menuManagerTaxPayers, 'Select function:')
        switch (indexMenuManagerTaxPayers) {
            case 0:
                console.log(` --- List Tax Payers : --- `)
                console.table(managerTax.showListTaxPayers());
                pressEnterToBack();
                MenuAdmin.managerTaxPayers();
                break;
            case 1:
                managerTax.calculatePersonalIncomeTax();
                pressEnterToBack();
                MenuAdmin.managerTaxPayers();
                break;
            case 2:
                managerTax.registerTaxPayers();
                pressEnterToBack();
                MenuAdmin.managerTaxPayers();
                break;
            case 3:
                MenuEditTaxPayers.option();
                pressEnterToBack()
                MenuAdmin.managerTaxPayers();
                break;
            case 4:
                managerTax.deleteTaxPayers();
                pressEnterToBack()
                MenuAdmin.managerTaxPayers();
                break;
        }
    }
}
