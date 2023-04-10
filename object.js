// ! 객체 타입
// 타입 표기로 작성한 object Type
var personAnnotation = {
    firstName: 'DongHyun',
    lastName: 'Lee',
    age: 28,
};
// 타입 추론
var personInterface = {
    firstName: 'DongHyun',
    lastName: 'Lee',
    age: 28,
};
// ! 배열 타입
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ['Lee', "DongHyun", "Front-End"];
var booleanArray = [true, false, true, true];
var objectArray = [
    { name: "Lee" },
    { name: "Kim" },
    { name: "Joe" },
];
// ! 객체타입과 배열타입 타입 표기
var userAnnotation = {
    name: 'DongHyun',
    age: 28,
    hobbies: ['Soccer', 'Foot Ball', 'Table Tennis']
};
// ! 객체타입과 배열타입 타입 표기
var userInterface = {
    name: "DongHyun",
    age: 28,
    hobbies: ["Soccer", "Foot Ball", "Table Tennis"],
};
