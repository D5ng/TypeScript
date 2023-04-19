"use strict";
function mergeObject(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObject = mergeObject({ name: "dongs" }, { age: 28 });
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got 1 elements`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return `Value ${obj[key]}`;
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
const numberStorage = new DataStorage();
function calc(x, y) {
    return {
        message1: x,
        message2: y,
    };
}
const textMessage = "Hello";
const resultCalc = calc(textMessage, "World");
console.log(resultCalc);
