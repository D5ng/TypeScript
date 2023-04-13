{
    var addNumber = function (x, y) { return x + y; };
    console.log(addNumber(5, 5));
}
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
person.greet("Hello My name is");
var user1;
user1 = new Person("Dongs");
user1.greet("Hi There I am");
