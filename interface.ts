interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(pharse: string): void;
}

class Person implements Greetable {
  age = 28;
  constructor(public name: string) {}
  greet(pharse: string) {
    console.log(`${pharse} ${this.name}`);
  }
}

const person = new Person("DongHyun");
person.greet("Hello My name is");

let user1: Greetable;

user1 = new Person("Dongs");
user1.greet("Hi There I am");
