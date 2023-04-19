"use strict";
function addNumber(n1, n2) {
    return n1 + n2;
}
function addNumber2(n1, n2) {
    return n1 + n2;
}
function voidInterface(n1, n2) {
    console.log(n1 + n2);
}
function voidAnnotation(n1, n2) {
    console.log(n1 + n2);
}
const result = addNumber(15, 13);
const result2 = addNumber2(15, 13);
function printResult(number) {
    console.log(number);
}
let combineValues;
combineValues = addNumber2;
combineValues = printResult;
console.log(combineValues(5, 5));
let combineValues2;
combineValues2 = addNumber2;
console.log(combineValues2(5, 10));
function printNumber(callback) {
    for (let i = 1; i <= 10; i++) {
        callback(i);
    }
}
const evenFunc = printNumber((index) => {
    if (index % 2 === 0)
        console.log(index);
});
const oddFunc = printNumber((index) => {
    if (index % 2 !== 0)
        console.log(index);
});
