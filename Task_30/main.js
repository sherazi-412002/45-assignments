"use strict";
const userName = ["Admin", "Ali", "Zahid", "Nouman", "Haider"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}
