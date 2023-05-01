import {TaxPayersAccount} from "./src/model/TaxPayersAccount";
import {TaxAdminAccount} from "./src/model/TaxAdminAccount";
import {TaxPayers} from "./src/controller/TaxPayers";
import {ManagerAccount} from "./src/controller/ManagerAccount";
import {ManagerTaxPayers} from "./src/controller/ManagerTaxPayers";


let taxPayerAccount1 = new TaxPayersAccount('1','account1');
let taxPayerAccount2 = new TaxPayersAccount('2','account2');
let taxPayerAccount3 = new TaxPayersAccount('3','account2');
let adminAccount = new TaxAdminAccount('admin','imadmin');
let person1 = new TaxPayers('A','CCCD1','phone1','a@gmail.com',10000000,1,1)
let person2 = new TaxPayers('B','CCCD2','phone2','b@gmail.com',20000000,2,2)
let person3 = new TaxPayers('C','CCCD3','phone3','c@gmail.com',30000000,3,3)
let managerAccount = new ManagerAccount();
let managerTax = new ManagerTaxPayers();
managerTax.addTaxPayers('A','CCCD1','phone1','a@gmail.com',20000000,1,1);
managerTax.addTaxPayers('B','CCCD2','phone2','b@gmail.com',20000000,2,2);
managerTax.addTaxPayers('C','CCCD3','phone3','c@gmail.com',30000000,3,3);
console.table(managerTax.getListTaxPayers());
console.log(managerTax.calculatePersonalIncomeTax('A','CCCD1'))
