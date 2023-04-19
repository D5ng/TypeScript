/**
 * ! 리터럴 타입
 * ! 리터럴 타입은 특정 값을 명시해서 사용할 수 있다.
 */

// let literal: "HelloWorld" = "HelloWorld";
// literal = "Hello"; // 'HelloWorld' 라는 문자열이 아니면 에러가 난다.

function printType(number: number, oddAndEven: "even" | "odd") {
  if (oddAndEven === "even" && number % 2 === 0) {
    console.log("짝수가 맞습니다");
  } else if (oddAndEven === "odd" && number % 2 !== 0) {
    console.log("홀수 입니다.");
  } else {
    console.log("올바른 값이 입력되지 않았습니다.");
  }
}

printType(10, "even");
printType(1, "even");
printType(5, "odd");
