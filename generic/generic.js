var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeObject(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var mergedObject = mergeObject({ name: "dongs" }, { age: 28 });
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements";
    }
    else if (element.length > 1) {
        descriptionText = "Got ".concat(element.length, " elements");
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value ".concat(obj[key]);
}
// console.log(extractAndConvert({ name: "Dongs" }, "name"));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
// textStorage.addItem("Dongs");
// textStorage.addItem("DongHyun");
// textStorage.addItem("동현씨");
// textStorage.removeItem("동현씨");
// console.log(textStorage.getItems());
var numberStorage = new DataStorage();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// numberStorage.addItem(3);
// numberStorage.removeItem(3);
// console.log(numberStorage.getItems());
// const objStorage = new DataStorage<object>();
// const dongObject = { name: "Dongs" };
// objStorage.addItem(dongObject);
// objStorage.addItem({ name: "DongHyun" });
// objStorage.removeItem(dongObject);
// console.log(objStorage.getItems());
function calc(x, y) {
    return {
        message1: x,
        message2: y,
    };
}
var textMessage = "Hello";
var resultCalc = calc(textMessage, "World");
console.log(resultCalc);
