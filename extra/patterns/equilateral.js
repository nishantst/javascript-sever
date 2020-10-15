let norow = process.argv[2];

function triangle(norow){
    if(norow<=10&&norow>=2){
     a = '';
     n = norow;
     m = (n-1); 
    for(i=1; i <= n; i++)
    {
        a = a.trim();
        a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
        console.log(a);
        m--;
    }
}
else console.log("wrong input");
}
console.log("Print a triangle with rows ",norow);
triangle(norow);
