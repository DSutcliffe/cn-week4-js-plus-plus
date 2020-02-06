let p1Stack = [90, 80, 60, 60, 50];
let p2Stack = [90, 80, 50, 70, 60];
let drawStack = [];
// Add a Win Stack to shuffle the cards won ???
let winStack = [];

const test = () => {
    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(drawStack.length);

    if (p1Stack[0] == p2Stack[0]) {
        drawStack.push(p1Stack[0]);
        drawStack.push(p2Stack[0]);
        p1Stack.shift();
        p2Stack.shift();
        console.log(drawStack);

    } else if (p1Stack[0] > p2Stack[0]) {
        console.log("Player 1 Wins Card(s)");
        
        if (drawStack != "") {
            // Add Draw cards to end of array
            p1Stack = p1Stack.concat(drawStack);      // use concat to add to array - PUSH Didnt fill array correct
            // p1Stack.push(drawStack);
            drawStack = [];
        }
        
        // Add/Copy 1st Element to end of array
        p1Stack.push(p1Stack[0]);
        // Remove 1st Element after copied to end of array
        p1Stack.shift();
        // Add P2's card to P1's stack
        p1Stack.push(p2Stack[0]);
        // Remove lost card from P2's stack
        p2Stack.shift();

    } else {
        console.log("Player 2 Wins Card(s)");

        if (drawStack != "") {
            // Add Draw cards to end of array
            p2Stack = p2Stack.concat(drawStack);      // use concat to add to array - PUSH Didnt fill array correct
            // p2Stack.push(drawStack);
            drawStack = [];
        }
        
        // Add/Copy 1st Element to end of array
        p2Stack.push(p2Stack[0]);
        // Remove 1st Element after copied to end of array
        p2Stack.shift();
        // Add P1's card to P2's stack
        p2Stack.push(p1Stack[0]);
        // Remove lost card from P1's stack
        p1Stack.shift();

    }

    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(drawStack.length);
    console.log(`P1Stack ${p1Stack}`);
    console.log(`P2Stack ${p2Stack}`);
    console.log(`DrawStack ${drawStack}`)

}

/*
test();
test();
*/

while (p1Stack.length != 0 && p2Stack.length != 0) {
    test();
}
