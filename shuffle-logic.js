let arr1 = [1, 2, 3, 4, 5];

function shuffle(a) {
    let x;
    let y;
    for (let i = a.length - 1; i > 0; i--) {
        console.log(`i Value ${i}`);

        console.log("x = Math.random");
        x = Math.floor(Math.random() * (i + 1));
        console.log(`x = ${x}`);
        console.log(" ");

        console.log("y = a[i]");
        y = a[i];
        console.log(`y = ${a[i]}`)
        console.log(" ");

        console.log("a[i] = a[x]");
        a[i] = a[x];
        console.log(`a[${i}] = ${a[x]}`)
        console.log(" ");

        console.log("a[x] = y");
        a[x] = y;
        console.log(`a[${x}] = ${y}`)

        console.log(a);
    }
    // console.log(a);
    // return a;
}

shuffle(arr1);
/*
shuffle(arr1);
shuffle(arr1);
shuffle(arr1);
shuffle(arr1);
*/