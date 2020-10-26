export function validateEmail(Email:string) {
   var  RegExp = "^[a-zA-Z0-9+_.-]+@successive.tech+$";
    let str = Boolean(Email.match(RegExp));
    return str;
}
