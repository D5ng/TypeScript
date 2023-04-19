// interface AddFn {
//   (a: number, b: number): number;
// }

// {
//   let addNumber: AddFn = (x: number, y: number) => x + y;
//   console.log(addNumber(5, 5));
// }

// interface Named {
//   readonly name?: string;
// }

// interface Greetable extends Named {
//   greet(pharse: string): void;
// }

// class Person implements Greetable, Named {
//   age = 28;
//   constructor(public name?: string) {
//     if (name) {
//       this.name = name;
//     }
//   }
//   greet(pharse: string) {
//     if (this.name) {
//       console.log(`${pharse} ${this.name}`);
//     } else {
//       console.log("Hi");
//     }
//   }
// }

// const person = new Person();
// person.greet("Hello My name is");

// let user1: Greetable;

// user1 = new Person("Dongs");
// user1.greet("Hi There I am");

interface User {
  name: string;
  age?: number;
  say(): void;
}

const user: User = {
  name: "Dongs",
  say() {
    console.log(`my name is ${this.name}`);
  },
};

{
  class Person implements User {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }

    say(): void {
      console.log(`my name is ${this.name}`);
    }
  }

  new Person("DongHyun");
}
