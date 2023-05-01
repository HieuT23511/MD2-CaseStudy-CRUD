import {Account} from "../model/Account";
import {TaxAdminAccount} from "../model/TaxAdminAccount";

export class ManagerAccount {
    listAccount: Account[];

    constructor() {
        this.listAccount = [];
    }

    checkAccount(id: string) {
        this.listAccount.forEach(elements => {
            if (id === elements.getID()) {
                console.log(`This ${id} was existed`)
            } else {
                console.log(`This ${id} can be register`)
            }
        })
    }

    registerAccount(taxCode: string, password: string) {
        // this.checkAccount(taxCode) : need to check before register.
        let newAccount:Account =new Account(taxCode,password)
        this.listAccount.push(newAccount);
    }

    changePassword(id: string, password: string) {
        this.listAccount.forEach(elements => {
            if (id === elements.getID()) {
                elements.setPassword(password);
                console.log(`This Account with ${id} has changed the password successfully!`)
            } else {
                console.log(`This Account with ${id} was not existed. Please re-enter Correct ID!`);
            }
        })
    }

    deleteAccount(id: string) {
        this.listAccount.forEach((elements, index) => {
            if (id === elements.getID()) {
                this.listAccount.splice(index, 1);
                console.log(`This Account with ${id} deleted`)
            } else {
                console.log(`This Account with ${id} was not existed. Please re-enter Correct ID!`);
            }
        })
    }
}