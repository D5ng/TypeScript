/**
 * ! 타입 별칭
 * ! 유니언 타입처럼 2개 이상의 타입들을 하나의 변수로 만드는것을 타입 별칭이라고 한다.
 */
type NumberCombinable = number | string;

function add(n1: NumberCombinable, n2: NumberCombinable) {
  return typeof n1 === "number" && typeof n2 === "number" ? n1 + n2 : +n1 + +n2;
}

console.log(add(10, 10));
console.log(add("10", 10));
console.log(add("10", "10"));
