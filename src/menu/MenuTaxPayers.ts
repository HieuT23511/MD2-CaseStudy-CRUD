import {TaxPayers} from "../controller/TaxPayers";
import {pressEnterToBack, readlineSync} from "../../Main";
import {MenuEditInformation} from "./Menu_Edit_Infomation";

const menuForTaxPayers: string[] = ['Show Information', 'Edit Information'];

export class MenuTaxPayers {
    static option(taxPayers: TaxPayers) {
        let loop = true;
        while (loop) {
            let indexForMenuTaxPayers = readlineSync.keyInSelect(menuForTaxPayers, `Selection Function: `)
            switch (indexForMenuTaxPayers) {
                case 0:
                    taxPayers.showInfoTaxPayers();
                    pressEnterToBack()
                    break;
                case 1:
                    MenuEditInformation.option(taxPayers)
                    pressEnterToBack();
                    break;
                default:
                    if (readlineSync.keyInYN(`Are you sure ? `)) {
                        loop = false
                    }
            }
        }
    }
}
