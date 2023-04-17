function merge<T, U>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}

const mergedObject = merge({ name: "dongs" }, { age: 28 });
const mergedObject2 = merge(
  { name: "DongHyun", hobbies: ["Foot Ball", "Soccer"] },
  { age: 28 }
);
console.log(mergedObject, mergedObject2);
