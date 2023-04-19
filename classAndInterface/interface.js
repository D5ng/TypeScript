// interface AddFn {
//   (a: number, b: number): number;
// }
var user = {
    name: "Dongs",
    say: function () {
        console.log("my name is ".concat(this.name));
    },
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log("my name is ".concat(this.name));
    };
    return Person;
}());
new Person("DongHyun");
