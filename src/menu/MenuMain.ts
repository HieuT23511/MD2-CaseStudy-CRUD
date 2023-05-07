import {adminAccount, managerAccount, managerTax, readlineSync} from "../../Main";
import {MenuAdmin} from "./MenuAdmin";
import {MenuTaxPayers} from "./MenuTaxPayers";
import {TaxPayers} from "../controller/TaxPayers";
import {Regex} from "../regex/Regex";

export class MenuMain {
    static login() {
        let idInput: string = readlineSync.question(`Input ID: `);
        if (idInput === adminAccount.getID()) {
            let passwordInput = readlineSync.question(`Input password: `, {hideEchoBack: true})
            if (passwordInput !== adminAccount.getPassword()) {
                console.log(`ID or Password is wrong!`)
                return
            }
            console.log(`Log-in role Admin!`);
            MenuAdmin.option();
        } else {
            let index = managerAccount.findIndexByID(idInput);
            if (index === -1) {
                console.log(`This Account with id : ${idInput} was not existed. Please register!`)
                return;
            }
            let passwordInput = readlineSync.question(`Input password: `, {hideEchoBack: true})
            if (passwordInput !== managerAccount.showListAccount()[index].getPassword()) {
                console.log(`Password is wrong. Please Re-enter correct password!`)
                return;
            }
            console.log(`Log-in role Tax Payers!`);
            let taxPayers : TaxPayers |undefined  = managerTax.findTaxPayersByTaxCode(idInput);
            if(taxPayers){
            MenuTaxPayers.option(taxPayers);
            }
        }
    }

    static register() {
        let inputTaxCode: string = readlineSync.question(`Input Taxcode of Tax Payers: `)
        if(managerAccount.findIndexByID(inputTaxCode)!==-1 || !Regex.validateTaxCode(inputTaxCode)){
            console.log(`This id: ${inputTaxCode} is invalid!`)
            return;
        }
        let inputPassword:string = readlineSync.question(`Input Password: `, {hideEchoBack:true});
        if(!Regex.validatePassword(inputPassword)){
            console.log(`This ${inputPassword} is invalid!`)
            return;
        }
        let confirmPassword:string = readlineSync.question(`Confirm Password: `, {hideEchoBack:true});
        if(confirmPassword !==inputPassword){
            console.log(`Confirm password doesn't match input Password. Please re-enter confirm Password`)
            return;
        }
        managerAccount.registerAccount(inputTaxCode,inputPassword);
    }
    static forgotPassword() {
         let id = readlineSync.question(`Input your ID: `);
        if(managerAccount.findIndexByID(id)===-1){
            console.log(`This Account with ID: '${id}' was not existed!`);
            return;
        }
        console.log(`Reset password sent your register Email!`);
    }
}