"use strict";
function printType(number, oddAndEven) {
    if (oddAndEven === "even" && number % 2 === 0) {
        console.log("짝수가 맞습니다");
    }
    else if (oddAndEven === "odd" && number % 2 !== 0) {
        console.log("홀수 입니다.");
    }
    else {
        console.log("올바른 값이 입력되지 않았습니다.");
    }
}
printType(10, "even");
printType(1, "even");
printType(5, "odd");
