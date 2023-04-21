/**
 * ! 데코레이터
 * ! 이 기능을 사용하려면 tsconfig.json에서 experimentalDecorators옵션을 true로 설정해 주어야 사용할 수 있다.
 */

// ! 클래스 데코레이터
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.dir(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log(`Template Factory`);
  return function <T extends { new (...args: any[]): any }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering Template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Dongs";
  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();
console.log(person);

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Access Decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(target: any, prop: string, descriptor: PropertyDescriptor) {
//   console.log("Method Decorator");
//   console.log(target);
//   console.log(prop);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string, parameterIndex: number) {
//   console.log("Parameter Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(parameterIndex);
// }

// class Product {
//   // @Log
//   title: string;
//   private _price: number;

//   // @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid Price!!");
//     }
//   }

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
