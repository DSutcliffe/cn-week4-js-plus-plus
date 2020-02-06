let p1Stack = [90, 80, 70, 60, 50];
let p2Stack = [40, 30, 20, 10, 1];
// let p2Stack = [100, 30, 60, 90, 10];
let drawStack = [];

const test = () => {
    console.log(p1Stack.length);
    console.log(p2Stack.length);

    if (p1Stack[0] < p2Stack[0]) {
        console.log("Player 2 Wins Card");

        p2Stack.push(p2Stack[0]);
        p2Stack.shift();
        p2Stack.push(p1Stack[0]);
        p1Stack.shift();
    } else {
        console.log("Player 1 Wins Card");

        p1Stack.push(p1Stack[0]);
        p1Stack.shift();
        p1Stack.push(p2Stack[0]);
        p2Stack.shift();
    }

    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(`P1Stack ${p1Stack}`);
    console.log(`P2Stack ${p2Stack}`);

}

while (p1Stack.length != 0 && p2Stack.length != 0) {
    test();
}

/*
if (p1Stack[0] == p2Stack[0]) {
    drawStack.push(p1Stack[0]);
    drawStack.push(p2Stack[0]);
}
*/