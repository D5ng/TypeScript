/**
 * ! 데코레이터
 * ! 이 기능을 사용하려면 tsconfig.json에서 experimentalDecorators옵션을 true로 설정해 주어야 사용할 수 있다.
 */

function Logger(constructor: Function) {
  console.log("logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Dongs";

  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();
console.log(person);
