import {Account} from "../model/Account";
import {TaxAdminAccount} from "../model/TaxAdminAccount";
import {TaxPayersAccount} from "../model/TaxPayersAccount";
import {readlineSync} from "../../Main";
import {Regex} from "../regex/Regex";

export class ManagerAccount {
    private readonly listAccount: Account[];

    constructor() {
        this.listAccount = [];
    }

    showListAccount() {
        return this.listAccount;
    }

    findIndexByID(id: string) {
        return this.listAccount.findIndex(elements => elements.getID() === id);
    }

    addAccount(account: TaxPayersAccount) {
        this.listAccount.push(account);
    }

    registerAccount(taxCode: string, password: string) {
        let newAccount: Account = new TaxAdminAccount(taxCode, password)
        if (newAccount) {
            this.listAccount.push(newAccount);
            console.log(`New Account with id: ${taxCode} registered successfully! `)
        }
    }

    changePassword() {
        let inputID = readlineSync.question(`Input ID need change Password: `);
        if (this.findIndexByID(inputID) === -1) {
            console.log(`This id : ${inputID} was not existed. Please register! `)
            return;
        }
        let inputPassword = readlineSync.question(`Input password: `, {hideEchoBack: true})
        if (!Regex.validatePassword(inputPassword)) {
            console.log(`This ${inputPassword} is invalid!`)
            return;
        }
        let confirmPassword = readlineSync.question(`Confirm password: `, {hideEchoBack: true});
        if (confirmPassword !== inputPassword) {
            console.log(`Confirm password doesn't match input Password. Please re-enter confirm Password`)
            return;
        }
        this.listAccount[this.findIndexByID(inputID)].setPassword(inputPassword);
        console.log(`The Account with id ${inputID} changed password successfully!`)
    }

    deleteAccount() {
        let inputID = readlineSync.question(`Input ID need delete: `);
        if (this.findIndexByID(inputID) === -1) {
            console.log(`This Account with id : ${inputID} was not existed. Please register! `)
            return;
        }
        console.log(`---- Information of Tax Payers that you want to delete: `)
        console.log(this.listAccount[this.findIndexByID(inputID)]);
        if (readlineSync.keyInYN()) {
            this.listAccount.splice(this.findIndexByID(inputID), 1);
            console.log(`The Account with id ${inputID} was deleted!`)
            return;
        }
        this.deleteAccount();
    }
}