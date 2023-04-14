// 타입스크립트는 HTML 파일을 분석하지 못하므로 class나 Id 사용할 때 해당하는 태그가 무엇인지 모른다.
// 따라서 DOM을 조작할 때 타입을 강제적으로 바꿔야한다.

// <> 사용한 방법
const input1 = <HTMLInputElement>document.querySelector(".input")!;
// as 사용한 방법
const input2 = document.querySelector(".input")! as HTMLInputElement;

// 괄호 연산자로 평가 후 접근.
(<HTMLInputElement>input1).value = "Hello Dongs";
(input2 as HTMLInputElement).value = "Hello Dongs";
