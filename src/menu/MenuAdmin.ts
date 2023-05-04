import {init, managerAccount, pressEnterToBack, readlineSync} from "../../Main";
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
    'Show Tax Payers',
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
                console.table(managerAccount.showListAccount()) ;
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


                break;
            case 1:

                break;
            case 2:


                break;
            case 3:


                break;
            case 4:


                break;
            case 5:


                break;

            default:
                if (readlineSync.keyInYN(`Are you sure cancel?`)) {
                    MenuAdmin.option();
                    break
                }
        }
    }
}
