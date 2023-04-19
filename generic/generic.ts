function mergeObject<T extends object, U extends object>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}

const mergedObject = mergeObject({ name: "dongs" }, { age: 28 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 elements`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

// console.log(extractAndConvert({ name: "Dongs" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem("Dongs");
// textStorage.addItem("DongHyun");
// textStorage.addItem("동현씨");
// textStorage.removeItem("동현씨");
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// numberStorage.addItem(3);
// numberStorage.removeItem(3);
// console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const dongObject = { name: "Dongs" };
// objStorage.addItem(dongObject);
// objStorage.addItem({ name: "DongHyun" });
// objStorage.removeItem(dongObject);
// console.log(objStorage.getItems());

function calc<T>(x: string, y: T) {
  return {
    message1: x,
    message2: y,
  };
}

const textMessage = "Hello";
const resultCalc = calc<string>(textMessage, "World");
console.log(resultCalc);
