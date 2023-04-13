interface AddFn {
  (a: number, b: number): number;
}

{
  let addNumber: AddFn = (x: number, y: number) => x + y;
  console.log(addNumber(5, 5));
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(pharse: string): void;
}

class Person implements Greetable, Named {
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
