export class Regex {
    static validateDependant(regex:string):boolean{
        let DEPENDANT_REGEX : RegExp = /^[0-9]{1,2}$/
        //Input 0-99.
        return DEPENDANT_REGEX.test(regex);
    }
    static validateEmail(regex: string): boolean {
        let  EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        // abcxyz123@gmail.com
        return EMAIL_REGEX.test(regex);
    }
    static validateIdentify (regex:string):boolean{
        let IDENTIFY_REGEX: RegExp = /^[0-9]{9,12}$/;
        // 9 or 12 Characters (numbers)
        return IDENTIFY_REGEX.test(regex);
    }
    static validateName(regex: string): boolean {
        let NAME_REGEX: RegExp = /^[a-zA-Z\s]+$/;
        // (name + max 1 space)
        return NAME_REGEX.test(regex);
    }
    static validatePassword(regex: string): boolean {
        let PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
        // less need : 1 Upper + 1 Lower + 1 number (Min 5 Characters)
        return PASSWORD_REGEX.test(regex);
    }
    static validatePhoneNumber(regex: string): boolean {
        let PHONE_NUMBER_REGEX: RegExp = /^(0)\d{9}$/;
        // Begin = 0 + 9 characters (number)
        return PHONE_NUMBER_REGEX.test(regex);
    }
    static validateTaxableIncome (regex: string):boolean{
        let TAXABLE_INCOME:RegExp = /^[1-9]\d*$/
        //Taxable >0
        return TAXABLE_INCOME.test(regex);
    }
    static validateTaxCode(regex: string):boolean {
        let TAXCODE_REGEX: RegExp = /^\d{10}$/
        //Input 0-9: 10 characters
        return TAXCODE_REGEX.test(regex);
    }
}