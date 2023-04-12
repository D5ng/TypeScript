interface Person {
  name: string;
  age: number;
  greet(pharse: string): void;
}

let user1: Person;

user1 = {
  name: "Dongs",
  age: 28,
  greet(pharse) {
    console.log(`${pharse} ${this.name}`);
  },
};

user1.greet("Hi There I am");
