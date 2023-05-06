import { managerAccount, managerTax, pressEnterToBack, readlineSync} from "../../Main";
import {MenuMain} from "./MenuMain";

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
    'Add Tax Payers',
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
                    MenuAdmin.managerAccount()
                    pressEnterToBack()
                    break;
                case 1:
                    MenuAdmin.managerTaxPayers()
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
                break;
            case 1:
                MenuMain.register()
                break;
            case 2:
                managerAccount.changePassword();
                break;
            case 3:
                managerAccount.deleteAccount();
                break;
            default:
                if (readlineSync.keyInYN(`Are you sure cancel?`)) {
                    MenuAdmin.option();
                    break
                }
        }
    }

    static managerTaxPayers() {

        let indexMenuManagerTaxPayers: number = readlineSync.keyInSelect(menuManagerTaxPayers, 'Select function:')
        switch (indexMenuManagerTaxPayers) {
            case 0:
                console.table(managerTax.showListTaxPayers());
                break;
            case 1:
                managerTax.calculatePersonalIncomeTax();
                break;
            case 2:
                managerTax.registerTaxPayers();
                break;
            case 3:
                let menuEditTaxPayers: string[] = ['Edit Gmail', 'Edit Phone Number', 'Edit dependant', 'Edit Taxable Income'];
                let index = readlineSync.keyInSelect(menuEditTaxPayers);
                switch (index) {
                    case 0:
                        managerTax.editGmailOfTaxPayers();
                        break;
                    case 1:
                        managerTax.editPhoneNumberOfTaxPayers();
                        break;
                    case 2:
                        managerTax.editDependantOfTaxPayers();
                        break;
                    case 3:
                        managerTax.editTaxableIncomeOfTaxPayers();
                        break
                    default:
                        if (readlineSync.keyInYN()) {
                            MenuAdmin.managerTaxPayers()
                        }
                }
                break;
            case 4:
                managerTax.deleteTaxPayers();
                break;
            default:
                if (readlineSync.keyInYN(`Are you sure cancel?`)) {
                    MenuAdmin.option();
                    break
                }
        }
    }
}
