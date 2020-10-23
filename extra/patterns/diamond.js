let norow;
export function diamond(norow) {
    console.log("Print a diamond with rows ", norow);
    let str = " ";
    if (norow <= 10 && norow >= 2) {
        for (let i = 0; i <= norow; i++) {
            str = "";
            for (let j = norow; j > i; j--) {
                str += " ";
            }
            for (let k = 1; k < i; k++) {
                str += "*";
            }
            for (let l = 1; l <= i; l++) {
                str += "*";
            }
            console.log(str);
        }
        for (let i = norow; i >= 0; i--) {
            str = "";
            for (let j = norow; j > i; j--) {
                str += " ";
            }
            for (let k = 1; k < i; k++) {
                str += "*";
            }
            for (let l = 1; l <= i; l++) {
                str += "*";
            }
            console.log(str);
        }
    }
    else console.log("wrong input");
}
