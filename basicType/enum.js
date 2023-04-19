/**
 * ! 이넘 타입
 * ! 이넘은 열거형 타입을 말하고 특정 값들의 집합을 의미한다. 객체처럼 키와 값으로 이루어져있으며,
 * ! 값을 설정하지않으면 0부터 시작하고 증가 연산자처럼 작동된다.
 * ? 문자열로도 사용할 수도 있고 문자, 숫자 섞어서 사용하는것도 가능하다.
 */
var Team;
(function (Team) {
    Team[Team["designer"] = 0] = "designer";
    Team[Team["frontend"] = 1] = "frontend";
    Team[Team["backend"] = 2] = "backend";
    Team[Team["pm"] = 3] = "pm";
    Team[Team["pl"] = 4] = "pl";
    Team[Team["planner"] = 5] = "planner";
})(Team || (Team = {}));
function getTeamCode(teamCode) {
    console.log("\uC9C1\uBB34\uB294 ".concat(Team[teamCode], "\uC774\uACE0 \uCF54\uB4DC\uB294 ").concat(teamCode, "\uC785\uB2C8\uB2E4."));
}
getTeamCode(Team.designer);
