/*
    Lets user know if a shop is open or closed...

    Open: Weekend 8-18, Weekday 6-20
    Closed: If not Open as above
*/
shopStatus = "shop is closed"

function checkIfOpen(time, dayOfWeek) {
    if (dayOfWeek === "Sunday" || dayofWeek === "Saturday") {
        if (time > 8 && time < 18) {
            shopStatus = "shop is open"
        } 
        /* 
        else {
            return shopStatus;
        } 
        */
    } else if (time > 6 && time < 20) {
        shopStatus =  "shop is open"
    }
    /* 
    else {
        return shopStatus;
    } 
    */
    return shopStatus;
}

console.log(checkIfOpen(14, "Sunday"));