{
    var addNumber = function (x, y) { return x + y; };
    console.log(addNumber(5, 5));
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 28;
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (pharse) {
        if (this.name) {
            console.log("".concat(pharse, " ").concat(this.name));
        }
        else {
            console.log("Hi");
        }
    };
    return Person;
}());
var person = new Person();
person.greet("Hello My name is");
var user1;
user1 = new Person("Dongs");
user1.greet("Hi There I am");
