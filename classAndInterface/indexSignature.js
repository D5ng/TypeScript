"use strict";
const serverError = {
    statusError: 500,
    messageError: "The connection to the server has been lost",
};
const loginError = {
    statusError: 400,
    messageError: "400 Bad Request",
};
const shoppingList = {
    iMac: 130,
    mac: 200,
    trackpad: 40,
    airpod: 50,
    iPad: 130,
};
function totalSalary(shoppingList) {
    let result = 0;
    for (const item in shoppingList)
        result += shoppingList[item];
    return result;
}
console.log(totalSalary(shoppingList));
