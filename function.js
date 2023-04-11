/**
 * ! 반환 타입
 * ! 함수가 반환하는 값에 타입을 지정할 수 있다.
 */
/**
 * ! void 타입
 * ! "함수가 값을 반환하지 않는다"고 의도적으로 알려줄 때 사용한다.
 */
// ! 타입 추론해서 항상 number라는 값을 반환한다.
function addNumber(n1, n2) {
    return n1 + n2;
}
// ! 타입 표기로 number타입만 반환할 수 있게 가능하다.
function addNumber2(n1, n2) {
    return n1 + n2;
}
// ! 함수는 반환할 값이 없을 수 있다.
function voidInterface(n1, n2) {
    console.log(n1 + n2);
}
// ! 함수는 값을 반환할 수 없다는것을 타입 표기로 지정할 수 있다.
function voidAnnotation(n1, n2) {
    console.log(n1 + n2);
}
var result = addNumber(15, 13);
var result2 = addNumber2(15, 13);
/**
 * ! 함수 타입
 * ! 내가 만든 변수가 함수만 참조하고 싶을 때 Function을 사용해서 타입을 지정할 수 있다.
 * ! 하지만 모든 함수가 가능하기 때문에 화살표 표기법으로 Function 타입을 세밀하게 조정할 수 있다.
 */
function printResult(number) {
    console.log(number);
}
var combineValues;
combineValues = addNumber2;
combineValues = printResult;
console.log(combineValues(5, 5));
// ! 함수지만 number를 반환하는 함수만 재할당 할 수 있다.
var combineValues2;
combineValues2 = addNumber2;
// combineValues2 = printResult; // 컴파일 에러가 발생한다
console.log(combineValues2(5, 10));
/**
 * ! 콜백 함수 예시.
 */
function printNumber(callback) {
    for (var i = 1; i <= 10; i++) {
        callback(i);
    }
}
var evenFunc = printNumber(function (index) {
    if (index % 2 === 0)
        console.log(index);
});
var oddFunc = printNumber(function (index) {
    if (index % 2 !== 0)
        console.log(index);
});
