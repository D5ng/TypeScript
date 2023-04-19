"use strict";
const user = {
    name: "Dongs",
    say() {
        console.log(`my name is ${this.name}`);
    },
};
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log(`my name is ${this.name}`);
        }
    }
    new Person("DongHyun");
}
