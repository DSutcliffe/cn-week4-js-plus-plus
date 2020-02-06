// High Order Function we Use

let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
    }
    let greet = (time, fn) => {
    if(time < 1200){
    fn("Morning");
    }else if (time >= 1200 && time < 1800){
    fn("Afternoon");
    }else{
    fn("Evening");
    }
    }
    greet(1400, whichGreeting);


// High Order Function we dont wannt to use
/*
let add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}

// console.log(add(2));
console.log(add(2)(1));
*/