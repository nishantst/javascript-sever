
export function diamond(norow: number): void {
    console.log('Print a diamond with rows ', norow);
    let i: number;
    let j: number;
    let k: number;
    let l: number;
    let str: string = ' ';
    if (norow <= 10 && norow >= 2) {
        for ( i = 0; i <= norow; i++) {
            str = '';
            for ( j = norow; j > i; j--) {
                str += ' ';
            }
            for ( k = 1; k < i; k++) {
                str += '*';
            }
            for ( l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
        for ( i = norow; i >= 0; i--) {
            str = '';
            for ( j = norow; j > i; j--) {
                str += ' ';
            }
            for ( k = 1; k < i; k++) {
                str += '*';
            }
            for ( l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
    }
    else console.log('wrong input');
}
