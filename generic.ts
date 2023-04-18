function mergeObject<T extends object, U extends object>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}

const mergedObject = mergeObject({ name: "dongs" }, { age: 28 });
