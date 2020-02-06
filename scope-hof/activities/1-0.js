let myFunc = (greeting) => {
    console.log("Hello Code Nation");
}
let greet = (times, fn) => {
    for (i=0; i < times; i++) {
        fn();
    }
}
greet(5, myFunc);

/*
let myFunc = (greeting) => {
    console.log(`${greeting}`);
}
let greet = (times, fn) => {
    for (i=0; i < times; i++) {
        fn("Hello Code Nation");
    }
}
greet(5, myFunc);
*/