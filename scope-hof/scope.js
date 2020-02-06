let aVariable = 1;

const myFunction = () => {
    aVariable = 2;
    console.log(aVariable);
    if (aVariable == 2) {
        console.log(aVariable);
        aVariable = 3;
        if (aVariable == 3) {
            console.log(aVariable);
            aVariable = 4;
            console.log(aVariable);
        }
    }
}
console.log(aVariable);     // 1
myFunction()                // 2, 2, 3, 4
console.log(aVariable);     // 4