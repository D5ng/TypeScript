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
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var mergedObject = merge({ name: "dongs" }, { age: 28 });
var mergedObject2 = merge({ name: "DongHyun", hobbies: ["Foot Ball", "Soccer"] }, { age: 28 });
console.log(mergedObject, mergedObject2);
