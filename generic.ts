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

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Dongs" }, "name"));
