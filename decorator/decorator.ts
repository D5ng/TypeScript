/**
 * ! 데코레이터
 * ! 이 기능을 사용하려면 tsconfig.json에서 experimentalDecorators옵션을 true로 설정해 주어야 사용할 수 있다.
 */

// ! 클래스 데코레이터
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.dir(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log(`Template Factory`);
//   return function (constructor: any) {
//     console.log("Template Constructor");
//     const hookEl = document.getElementById(hookId)!;
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Dongs";
//   constructor() {
//     console.log("creating person object...");
//   }
// }
// const person = new Person();
// console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price!!");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
