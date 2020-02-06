class TopTrumps {
    constructor(name, img, health, strength, smarts, likes, special) {
        this._name = name;
        this._img = img;
        this._health = health;
        this._strength = strength;
        this._smarts = smarts;
        this._likes = likes;
        this._special = special;
    }
    get name() {
        return this._name;
    }
    get img() {
        return this._img;
    }
    get health() {
        return this._health;
    }
    get strength() {
        return this._strength;
    }
    get smarts() {
        return this._smarts;
    }
    get likes() {
        return this._likes;
    }
    get special() {
        return this._special;
    }
}

const familyGuyPack = [
    adamW = new TopTrumps("Adam West", "", 90,54,76,98,45),
    barbaraP = new TopTrumps("Barbara Pewtershmidt", "", 90,23,56,98,3),
    bonnieS = new TopTrumps("Bonnie Swanson", "", 12,65,87,3,9),
    brianG = new TopTrumps("Brian Griffin", "", 54,87,34,90,48),
    bruce = new TopTrumps("Bruce", "", 78,45,98,32,93),
    buzzK = new TopTrumps("Buzz Killington", "", 45,87,32,89,47),
    carterP = new TopTrumps("Carter Pewtershmidt", "", 34,67,90,87,38),
    chrisG = new TopTrumps("Chris Griffin", "", 56,87,32,46,47),
    clevelandB = new TopTrumps("Cleveland Brown", "", 34,56,32,87,34),
    connieD = new TopTrumps("Connie D'Amico", "", 67,45,67,89,36),
    consuela = new TopTrumps("Consuela", "", 98,45,32,78,48),
    drHartman = new TopTrumps("Dr. Hartman", "", 54,78,32,78,37),
    evilMonkey = new TopTrumps("Evil Monkey", "", 89,45,67,76,59),
    giantChicken = new TopTrumps("Giant Chicken", "", 98,54,67,23,4),
    glennQ = new TopTrumps("Glenn Quagmire", "", 45,67,45,56,38),
    greasedUp = new TopTrumps("Greased Up Deaf Guy", "", 34,56,89,98,37),
    hertbert = new TopTrumps("Herbert", "", 34,78,54,78,93),
    hotMeg = new TopTrumps("Hot Meg", "", 34,54,74,47,36),
    joeS = new TopTrumps("Joe Swanson", "", 39,68,58,84,5),
    loisG = new TopTrumps("Lois Griffin", "", 94,87,37,48,46),
    megG = new TopTrumps("Meg Griffin", "", 49,86,23,58,9),
    mortG = new TopTrumps("Mort Goldman", "", 59,93,75,84,37),
    neilG = new TopTrumps("Neil Goldman", "", 38,48,75,39,49),
    ollieW = new TopTrumps("Ollie Williams", "", 10,20,48,29,63),
    opie = new TopTrumps("Opie", "", 29,40,58,79,85),
    peterG = new TopTrumps("Peter Griffin", "", 10,38,69,100,100),
    seamus = new TopTrumps("Seamus", "", 83,93,45,49,57),
    stewieG = new TopTrumps("Stewie Griffin", "", 92,29,58,37,83),
    tomT = new TopTrumps("Tom Tucker", "", 95,39,28,75,38),
    trishaT = new TopTrumps("Trisha Takanawa", "", 93,38,58,38,38)
]

let allCards = familyGuyPack;

let shuffleDeck = [];
let p1Stack = [];
let p2Stack = [];
let drawStack = [];

let winningPlayer = 0;

// Compare Value of P1's Card & P2's Card
const cardCompare = () => {
    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(drawStack.length);

    if (p1Stack[0].health == p2Stack[0].health) {
        
        if (p1Stack.length == 1) {
            console.log("Player 1 has no more cards");
            p2WinsRound();

        } else if (p2Stack.length == 1) {
            console.log("Player 2 has no more cards");
            p1WinsRound();

        } else if (p1Stack.length == 1 && p2Stack.length == 1) {
            console.log("Its a DRAW!!!")

        } else {
            drawStack.push(p1Stack[0]);
            drawStack.push(p2Stack[0]);
            p1Stack.shift();
            p2Stack.shift();
            console.log(drawStack);
        }

    } else if (p1Stack[0].health > p2Stack[0].health) {
        console.log("Player 1 Wins Card(s)");
        p1WinsRound();
        
    } else {
        console.log("Player 2 Wins Card(s)");
        p2WinsRound();

    }

    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(drawStack.length);
    // console.log(`P1Stack ${p1Stack}`);
    console.log(p1Stack);
    // console.log(`P2Stack ${p2Stack}`);
    console.log(p2Stack);
    // console.log(`DrawStack ${drawStack}`)
    console.log(drawStack)

}

// Shuffle All Cards into random order
function shuffle(a) {
    let x;
    let y;
    for (let i = a.length - 1; i > 0; i--) {
        x = Math.floor(Math.random() * (i + 1));
        y = a[i];
        a[i] = a[x];
        a[x] = y;
    }
    shuffleDeck = a;
}

// Deal Cards between 2 Players
const deal = (a) => {
    for (let i = 0; a.length != 0; i++) {
        p1Stack[i] = a.shift();
        p2Stack[i] = a.shift();
    }
}

const p1WinsRound = () => {
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

    winningPlayer = 1;
}

const p2WinsRound = () => {
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

    winningPlayer = 2;
}

// Display All Cards in order
console.log(`Original Card Order ${allCards}`);

shuffle(allCards);
console.log(`Deck Shuffled Order ${allCards}`);

deal(shuffleDeck);
console.log(`P1's Stack ${p1Stack}`);
console.log(`P2's Stack ${p2Stack}`);

while (p1Stack.length != 0 && p2Stack.length != 0) {
    cardCompare();
}
console.log(`Player ${winningPlayer} Wins!`);
