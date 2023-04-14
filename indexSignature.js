// 인덱스 시그니처
var serverError = {
    statusError: 500,
    messageError: "The connection to the server has been lost",
};
var loginError = {
    statusError: 400,
    messageError: "400 Bad Request",
};
var shoppingList = {
    iMac: 130,
    mac: 200,
    trackpad: 40,
    airpod: 50,
    iPad: 130,
};
function totalSalary(shoppingList) {
    var result = 0;
    for (var item in shoppingList)
        result += shoppingList[item];
    return result;
}
console.log(totalSalary(shoppingList));
