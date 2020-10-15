let norow = process.argv[2]
function diamond(norow) {
    if (norow <= 10 && norow >= 2) {
        for (let i = 0; i <= norow; i++) {
            str = "";
            for (j = norow; j > i; j--) {
                str += " ";
            }
            for (k = 1; k < i; k++) {
                str += "*";
            }
            for (l = 1; l <= i; l++) {
                str += "*";
            }
            console.log(str);
        }
        for (let i = norow; i >= 0; i--) {
            str = "";
            for (j = norow; j > i; j--) {
                str += " ";
            }
            for (k = 1; k < i; k++) {
                str += "*";
            }
            for (l = 1; l <= i; l++) {
                str += "*";
            }
            console.log(str);
        }
    }
    else console.log("wrong input");
}
console.log("Print a diamond with rows ", norow);
diamond(norow);
