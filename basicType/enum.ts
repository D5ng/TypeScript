/**
 * ! 이넘 타입
 * ! 이넘은 열거형 타입을 말하고 특정 값들의 집합을 의미한다. 객체처럼 키와 값으로 이루어져있으며,
 * ! 값을 설정하지않으면 0부터 시작하고 증가 연산자처럼 작동된다.
 * ? 문자열로도 사용할 수도 있고 문자, 숫자 섞어서 사용하는것도 가능하다.
 */

enum Team {
  designer,
  frontend,
  backend,
  pm,
  pl,
  planner
}

function getTeamCode(teamCode: Team){
  console.log(`직무는 ${Team[teamCode]}이고 코드는 ${teamCode}입니다.`);
}

getTeamCode(Team.designer);