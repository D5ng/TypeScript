/**
 * ! 튜플 타입
 * ! 배열의 길이가 고정적이면서, 각 원소의 타입을 지정할 수 있다.
 * ? 튜플은 Array 메서드들을 사용할 수 있는 이상한 버그가 있다. 따라서 push로 배열의 길이가 초과될 수 있다.
 */

const tuple: [string, number] = ['days', 5];

tuple.push('아니 이게뭐야!!!', '왜 되는거지?', 1004);
console.log(tuple);