// ! 객체 타입
// 타입 표기로 작성한 object Type
const personAnnotation : {
  firstName: string,
  lastName: string,
  age: number
} = {
  firstName: 'DongHyun',
  lastName: 'Lee',
  age: 28,
}

// 타입 추론
const personInterface = {
  firstName: 'DongHyun',
  lastName: 'Lee',
  age: 28,
}

// ! 배열 타입
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['Lee', "DongHyun", "Front-End"];
const booleanArray: boolean[] = [true, false, true, true];
const objectArray: object[] = [
  { name: "Lee" },
  { name: "Kim" },
  { name: "Joe" },
];

// ! 객체타입과 배열타입 타입 표기
const userAnnotation : {
  name: string,
  age: number,
  hobbies: string[]
} = {
  name: 'DongHyun',
  age: 28,
  hobbies: ['Soccer', 'Foot Ball', 'Table Tennis']
}

// ! 객체타입과 배열타입 타입 표기
const userInterface = {
  name: "DongHyun",
  age: 28,
  hobbies: ["Soccer", "Foot Ball", "Table Tennis"],
};