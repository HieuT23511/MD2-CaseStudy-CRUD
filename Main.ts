import {TaxPayersAccount} from "./src/model/TaxPayersAccount";
import {TaxAdminAccount} from "./src/model/TaxAdminAccount";
import {TaxPayers} from "./src/controller/TaxPayers";
import {ManagerAccount} from "./src/controller/ManagerAccount";
import {ManagerTaxPayers} from "./src/controller/ManagerTaxPayers";
import {MenuMain} from "./src/menu/MenuMain";

const taxPayerAccount1 = new TaxPayersAccount('0123456789', 'Account1');
const taxPayerAccount2 = new TaxPayersAccount('1234567890', 'Account2');
const taxPayerAccount3 = new TaxPayersAccount('2345678901', 'Account3');
export const adminAccount = new TaxAdminAccount('admin', 'admin');
export const managerAccount = new ManagerAccount();
managerAccount.addAccount(taxPayerAccount1);
managerAccount.addAccount(taxPayerAccount2);
managerAccount.addAccount(taxPayerAccount3);
managerAccount.addAccount(adminAccount);
export let managerTax = new ManagerTaxPayers();
let person1 = new TaxPayers('Nguyen Van A', '001096003501', '0965671234', 'a@gmail.com', "10000000", "1", '0123456789');
let person2 = new TaxPayers('Tran Ngoc B', '001096003502', '0866113114', 'b@gmail.com', '20000000', '2', '1234567890');
let person3 = new TaxPayers('Le Minh C', '001096003503', '0858445556', 'c@gmail.com', '30000000', '3', '2345678901');
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

