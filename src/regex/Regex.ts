export class Regex {
    static validateDependant(regex:string){
        let DEPENDANT_REGEX : RegExp = /^[0-9]{1,2}$/ //Input 0-99.
        return DEPENDANT_REGEX.test(regex);
    }
    static validateEmail(regex: string): boolean {
        let  EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        return EMAIL_REGEX.test(regex);
    }
    static validateIdentify (regex:string){
        let IDENTIFY_REGEX: RegExp = /^[0-9]{9,12}$/;
        return IDENTIFY_REGEX.test(regex);
    }
    static validateName(regex: string): boolean {
        let NAME_REGEX: RegExp = /^[a-zA-Z\s]+$/;
        return NAME_REGEX.test(regex);
    }
    static validatePassword(regex: string): boolean {
        let PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
        return PASSWORD_REGEX.test(regex);
    }
    static validatePhoneNumber(regex: string): boolean {
        let PHONE_NUMBER_REGEX: RegExp = /^(0)\d{9}$/;
        return PHONE_NUMBER_REGEX.test(regex);
    }
    static validateTaxableIncome (regex: string){
        let TAXABLE_INCOME:RegExp = /^[1-9]\d*$/ //Taxable >0
        return TAXABLE_INCOME.test(regex);
    }
    static validateTaxCode(regex: string) {
        let TAXCODE_REGEX: RegExp = /^\d{10}$/ //Input 0-9: 10 characters
        return TAXCODE_REGEX.test(regex);
    }
}