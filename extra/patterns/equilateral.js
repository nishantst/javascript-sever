let norow;
export function equilateral (norow) {
    console.log("Print a triangle with rows ", norow);
    if (norow <= 10 && norow >= 2) {
        let a = '';
        let n = norow;
        let m = (n - 1);
        for (let i = 1; i <= n; i++) {
            a = a.trim();
            a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
            console.log(a);
            m--;
        }
    }
    else console.log("wrong input");
    
}
