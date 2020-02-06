const p1CardNameHTML = document.getElementById("p1CardName");
const p1CardImgHTML = document.getElementById("p1CardImg");

// const p1StatName1HTML = document.querySelector(".p1StatName1");
const p1StatName1HTML = document.getElementById("p1StatName1");
const p1StatName2HTML = document.getElementById("p1StatName2");
const p1StatName3HTML = document.getElementById("p1StatName3");
const p1StatName4HTML = document.getElementById("p1StatName4");
const p1StatName5HTML = document.getElementById("p1StatName5");

const p1Stat1ValueHTML = document.getElementById("p1StatValue1");
const p1Stat2ValueHTML = document.getElementById("p1StatValue2");
const p1Stat3ValueHTML = document.getElementById("p1StatValue3");
const p1Stat4ValueHTML = document.getElementById("p1StatValue4");
const p1Stat5ValueHTML = document.getElementById("p1StatValue5");


const p2CardNameHTML = document.getElementById("p2CardName");
const p2CardImgHTML = document.getElementById("p2CardImg");

const p2StatName1HTML = document.getElementById("p2StatName1");
const p2StatName2HTML = document.getElementById("p2StatName2");
const p2StatName3HTML = document.getElementById("p2StatName3");
const p2StatName4HTML = document.getElementById("p2StatName4");
const p2StatName5HTML = document.getElementById("p2StatName5");

const p2Stat1ValueHTML = document.getElementById("p2StatValue1");
const p2Stat2ValueHTML = document.getElementById("p2StatValue2");
const p2Stat3ValueHTML = document.getElementById("p2StatValue3");
const p2Stat4ValueHTML = document.getElementById("p2StatValue4");
const p2Stat5ValueHTML = document.getElementById("p2StatValue5");

class TopTrumps {
    constructor(name, img, stat1, stat2, stat3, stat4, stat5) {
        this._name = name;
        this._img = img;
        this._stat1 = stat1;
        this._stat2 = stat2;
        this._stat3 = stat3;
        this._stat4 = stat4;
        this._stat5 = stat5;
    }
    get name() {
        return this._name;
    }
    get img() {
        return this._img;
    }
    get stat1() {
        return this._stat1;
    }
    get stat2() {
        return this._stat2;
    }
    get stat3() {
        return this._stat3;
    }
    get stat4() {
        return this._stat4;
    }
    get stat5() {
        return this._stat5;
    }
}

const familyGuyPack = [
    adamW = new TopTrumps("Adam West", "img/familyGuy/AdamWest.jpeg", 90, 54, 76, 98, 45),
    barbaraP = new TopTrumps("Barbara Pewtershmidt", "img/familyGuy/BarbaraPewterschmidt.png", 90, 23, 56, 98, 3),
    bonnieS = new TopTrumps("Bonnie Swanson", "img/familyGuy/BonnieSwanson.jpeg", 12, 65, 87, 3, 9),
    brianG = new TopTrumps("Brian Griffin", "img/familyGuy/Brian.jpeg", 54, 87, 34, 90, 48),
    bruce = new TopTrumps("Bruce", "img/familyGuy/Bruce.jpeg", 78, 45, 98, 32, 93),
    buzzK = new TopTrumps("Buzz Killington", "img/familyGuy/BuzzKillington.jpeg", 45, 87, 32, 89, 47),
    carterP = new TopTrumps("Carter Pewtershmidt", "img/familyGuy/CarterPewterschmidt.jpeg", 34, 67, 90, 87, 38),
    chrisG = new TopTrumps("Chris Griffin", "img/familyGuy/Chris.jpeg", 56, 87, 32, 46, 47),
    clevelandB = new TopTrumps("Cleveland Brown", "img/familyGuy/ClevelandBrown.jpeg", 34, 56, 32, 87, 34),
    connieD = new TopTrumps("Connie D'Amico", "img/familyGuy/ConnieDAmico.jpeg", 67, 45, 67, 89, 36),
    consuela = new TopTrumps("Consuela", "img/familyGuy/Consuela.png", 98, 45, 32, 78, 48),
    drHartman = new TopTrumps("Dr. Hartman", "img/familyGuy/DrHartman.jpeg", 54, 78, 32, 78, 37),
    evilMonkey = new TopTrumps("Evil Monkey", "img/familyGuy/EvilMonkey.png", 89, 45, 67, 76, 59),
    giantChicken = new TopTrumps("Giant Chicken", "img/familyGuy/GiantChicken.png", 98, 54, 67, 23, 4),
    glennQ = new TopTrumps("Glenn Quagmire", "img/familyGuy/GlennQuagmire.jpeg", 45, 67, 45, 56, 38),
    greasedUp = new TopTrumps("Greased Up Deaf Guy", "img/familyGuy/GreasedUpDeafGuy.png", 34, 56, 89, 98, 37),
    hertbert = new TopTrumps("Herbert", "img/familyGuy/Herbert.jpeg", 34, 78, 54, 78, 93),
    hotMeg = new TopTrumps("Hot Meg", "img/familyGuy/HotMeg.png", 34, 54, 74, 47, 36),
    joeS = new TopTrumps("Joe Swanson", "img/familyGuy/JoeSwanson.jpeg", 39, 68, 58, 84, 5),
    loisG = new TopTrumps("Lois Griffin", "img/familyGuy/Lois.jpeg", 94, 87, 37, 48, 46),
    megG = new TopTrumps("Meg Griffin", "img/familyGuy/Meg.jpeg", 49, 86, 23, 58, 9),
    mortG = new TopTrumps("Mort Goldman", "img/familyGuy/MortGoldman.png", 59, 93, 75, 84, 37),
    neilG = new TopTrumps("Neil Goldman", "img/familyGuy/NeilGoldman.png", 38, 48, 75, 39, 49),
    ollieW = new TopTrumps("Ollie Williams", "img/familyGuy/OllieWilliams.jpeg", 10, 20, 48, 29, 63),
    opie = new TopTrumps("Opie", "img/familyGuy/Opie.png", 29, 40, 58, 79, 85),
    peterG = new TopTrumps("Peter Griffin", "img/familyGuy/Peter.jpeg", 10, 38, 69, 100, 100),
    seamus = new TopTrumps("Seamus", "img/familyGuy/Seamus.png", 83, 93, 45, 49, 57),
    stewieG = new TopTrumps("Stewie Griffin", "img/familyGuy/Stewie.png", 92, 29, 58, 37, 83),
    tomT = new TopTrumps("Tom Tucker", "img/familyGuy/TomTucker.jpeg", 95, 39, 28, 75, 38),
    trishaT = new TopTrumps("Trisha Takanawa", "img/familyGuy/TrishaTakanawa.jpeg", 93, 38, 58, 38, 38)
]
let familyGuyStats = [
    "Health",
    "Strength",
    "Smarts",
    "Likes",
    "Special"
]

const newPack = [
    card1 = new TopTrumps("card1", "img/new/x.png", 90, 54, 76, 98, 45),
    card2 = new TopTrumps("card2", "img/new/x.png", 90, 23, 56, 98, 3),
    card3 = new TopTrumps("card3", "img/new/x.png", 12, 65, 87, 3, 9),
    card4 = new TopTrumps("card4", "img/new/x.png", 54, 87, 34, 90, 48),
    card5 = new TopTrumps("card5", "img/new/x.png", 78, 45, 98, 32, 93),
    card6 = new TopTrumps("card6", "img/new/x.png", 45, 87, 32, 89, 47),
    card7 = new TopTrumps("card7", "img/new/x.png", 34, 67, 90, 87, 38),
    card8 = new TopTrumps("card8", "img/new/x.png", 56, 87, 32, 46, 47),
    card9 = new TopTrumps("card9", "img/new/x.png", 34, 56, 32, 87, 34),
    card10 = new TopTrumps("card10", "img/new/x.png", 67, 45, 67, 89, 36),
    card11 = new TopTrumps("card11", "img/new/x.png", 98, 45, 32, 78, 48),
    card12 = new TopTrumps("card12", "img/new/x.png", 54, 78, 32, 78, 37),
    card13 = new TopTrumps("card13", "img/new/x.png", 89, 45, 67, 76, 59),
    card14 = new TopTrumps("card14", "img/new/x.png", 98, 54, 67, 23, 4),
    card15 = new TopTrumps("card15", "img/new/x.png", 45, 67, 45, 56, 38),
    card16 = new TopTrumps("card16", "img/new/x.png", 34, 56, 89, 98, 37),
    card17 = new TopTrumps("card17", "img/new/x.png", 34, 78, 54, 78, 93),
    card18 = new TopTrumps("card18", "img/new/x.png", 34, 54, 74, 47, 36),
    card19 = new TopTrumps("card19", "img/new/x.png", 39, 68, 58, 84, 5),
    card20 = new TopTrumps("card20", "img/new/x.png", 94, 87, 37, 48, 46),
    card21 = new TopTrumps("card21", "img/new/x.png", 49, 86, 23, 58, 9),
    card22 = new TopTrumps("card22", "img/new/x.png", 59, 93, 75, 84, 37),
    card23 = new TopTrumps("card23", "img/new/x.png", 38, 48, 75, 39, 49),
    card24 = new TopTrumps("card24", "img/new/x.png", 10, 20, 48, 29, 63),
    card25 = new TopTrumps("card25", "img/new/x.png", 29, 40, 58, 79, 85),
    card26 = new TopTrumps("card26", "img/new/x.png", 10, 38, 69, 100, 100),
    card27 = new TopTrumps("card27", "img/new/x.png", 83, 93, 45, 49, 57),
    card28 = new TopTrumps("card28", "img/new/x.png", 92, 29, 58, 37, 83),
    card29 = new TopTrumps("card29", "img/new/x.png", 95, 39, 28, 75, 38),
    card30 = new TopTrumps("card30", "img/new/x.png", 93, 38, 58, 38, 38)
]
let newPackStats = [
    "Statistic 1",
    "Statistic 2",
    "Statistic 3",
    "Statistic 4",
    "Statistic 5"
]

let gamePack = familyGuyPack;
// let gamePack = newPack;

let gameStats = familyGuyStats;
// let gameStats = newPackStats;

let shuffleDeck = [];
let p1Stack = [];
let p2Stack = [];
let drawStack = [];

let winningPlayer = 0;

// Deck Select
const selectGamePack = () => {

}

// Single or 2 Player Game
const noOfPlayers = () => {

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

// Deal Cards into 2 Stacks
const deal = (a) => {
    for (let i = 0; a.length != 0; i++) {
        p1Stack[i] = a.shift();
        p2Stack[i] = a.shift();
    }
}

// Compare Value of P1's Card & P2's Card
const cardCompare = () => {
    console.log(p1Stack.length);
    console.log(p2Stack.length);
    console.log(drawStack.length);

    if (p1Stack[0].stat1 == p2Stack[0].stat1) {

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

    } else if (p1Stack[0].stat1 > p2Stack[0].stat1) {
        console.log("Player 1 Wins Card(s)");
        p1WinsRound();

    } else {
        console.log("Player 2 Wins Card(s)");
        p2WinsRound();

    }

}

const p1WinsRound = () => {
    if (drawStack != "") {
        // Add Draw cards to end of array
        p1Stack = p1Stack.concat(drawStack); // use concat to add to array - PUSH Didnt fill array correct
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
        p2Stack = p2Stack.concat(drawStack); // use concat to add to array - PUSH Didnt fill array correct
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

//
// START TOP TRUMPS GAME
//

shuffle(gamePack);

deal(shuffleDeck);

p1CardNameHTML.textContent = p1Stack[0].name;
p1CardImgHTML.src = p1Stack[0].img;

// p1StatName1HTML.querySelector('span').textContent = "Arrgghhhh!";
p1StatName1HTML.textContent = gameStats[0];
p1StatName2HTML.textContent = gameStats[1];
p1StatName3HTML.textContent = gameStats[2];
p1StatName4HTML.textContent = gameStats[3];
p1StatName5HTML.textContent = gameStats[4];

p1Stat1ValueHTML.textContent = p1Stack[0].stat1;
p1Stat2ValueHTML.textContent = p1Stack[0].stat2;
p1Stat3ValueHTML.textContent = p1Stack[0].stat3;
p1Stat4ValueHTML.textContent = p1Stack[0].stat4;
p1Stat5ValueHTML.textContent = p1Stack[0].stat5;

p2CardNameHTML.textContent = p2Stack[0].name;
p2CardImgHTML.src = p2Stack[0].img;

p2StatName1HTML.textContent = gameStats[0];
p2StatName2HTML.textContent = gameStats[1];
p2StatName3HTML.textContent = gameStats[2];
p2StatName4HTML.textContent = gameStats[3];
p2StatName5HTML.textContent = gameStats[4];

p2Stat1ValueHTML.textContent = p2Stack[0].stat1;
p2Stat2ValueHTML.textContent = p2Stack[0].stat2;
p2Stat3ValueHTML.textContent = p2Stack[0].stat3;
p2Stat4ValueHTML.textContent = p2Stack[0].stat4;
p2Stat5ValueHTML.textContent = p2Stack[0].stat5;

/*
while (p1Stack.length != 0 && p2Stack.length != 0) {
    cardCompare();
}
console.log(`Player ${winningPlayer} Wins!`);
*/