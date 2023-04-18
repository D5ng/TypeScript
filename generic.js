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
console.log(countAndDescribe("Hi there!"));
