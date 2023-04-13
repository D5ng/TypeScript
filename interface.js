var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 28;
    }
    Person.prototype.greet = function (pharse) {
        console.log("".concat(pharse, " ").concat(this.name));
    };
    return Person;
}());
var person = new Person("DongHyun");
console.log(person);
person.greet("Hello My name is");
var user1;
user1 = new Person("Dongs");
user1.greet("Hi There I am");
