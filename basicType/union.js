"use strict";
function addFunc(n1, n2) {
    return typeof n1 === "number" && typeof n2 === "number" ? n1 + n2 : +n1 + +n2;
}
console.log(addFunc(10, 10));
console.log(addFunc("10", 10));
console.log(addFunc("10", "10"));
