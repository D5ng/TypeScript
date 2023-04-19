/**
 * ! 유니언 타입
 * ! 조합 타입이라고도 부른다. 유니언 타입은 2개 이상의 타입을 가질 수 있다.
 */

function addFunc(n1: number | string, n2: number | string) {
  return typeof n1 === "number" && typeof n2 === "number" ? n1 + n2 : +n1 + +n2;
}

console.log(addFunc(10, 10));
console.log(addFunc("10", 10));
console.log(addFunc("10", "10"));
