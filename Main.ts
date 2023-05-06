import {TaxPayersAccount} from "./src/model/TaxPayersAccount";
import {TaxAdminAccount} from "./src/model/TaxAdminAccount";
import {TaxPayers} from "./src/controller/TaxPayers";
import {ManagerAccount} from "./src/controller/ManagerAccount";
import {ManagerTaxPayers} from "./src/controller/ManagerTaxPayers";
import {MenuMain} from "./src/menu/MenuMain";

const taxPayerAccount1 = new TaxPayersAccount('1', 'account1');
const taxPayerAccount2 = new TaxPayersAccount('2', 'account2');
const taxPayerAccount3 = new TaxPayersAccount('3', 'account3');
export const adminAccount = new TaxAdminAccount('admin', 'admin');
export const managerAccount = new ManagerAccount();
managerAccount.addAccount(taxPayerAccount1);
managerAccount.addAccount(taxPayerAccount2);
managerAccount.addAccount(taxPayerAccount3);
managerAccount.addAccount(adminAccount);
export let managerTax = new ManagerTaxPayers();
let person1 = new TaxPayers('A', 'CCCD1', 'phone1', 'a@gmail.com', 10000000, 1, '1');
let person2 = new TaxPayers('B', 'CCCD2', 'phone2', 'b@gmail.com', 20000000, 2, '2');
let person3 = new TaxPayers('C', 'CCCD3', 'phone3', 'c@gmail.com', 30000000, 3, '3');
managerTax.addTaxPayers(person1);
managerTax.addTaxPayers(person2);
managerTax.addTaxPayers(person3);
export const readlineSync = require('readline-sync');
const startMenu = ['Login', 'Register', 'Forgot password'];

export function init() {
    let loop = true;
    while (loop) {
        switch (keySelect(startMenu)) {
            case 0:
                MenuMain.login()
                pressEnterToBack()
                break;
            case 1:
                MenuMain.register()
                pressEnterToBack()
                break;
            case 2:
                MenuMain.forgotPassword()
                pressEnterToBack()
                break;
            default:
                if (readlineSync.keyInYN(`Are you sure ?`)) {
                    loop = false;
                }
                break;
        }
    }
}

function keySelect(data: string[]) {
    return readlineSync.keyInSelect(data, `Select function:`);
}

export function pressEnterToBack() {
    return readlineSync.question(`Press "Enter" to Back! `)
}
init();

