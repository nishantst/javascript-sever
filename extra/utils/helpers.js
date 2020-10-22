export function validateEmail(Email) {
    RegExp = "^[a-zA-Z0-9+_.-]+@successive.tech+$";
    let str = Boolean(Email.match(RegExp));
    return str;
}
