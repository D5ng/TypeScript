"use strict";
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
    console.log(`직무는 ${Team[teamCode]}이고 코드는 ${teamCode}입니다.`);
}
getTeamCode(Team.designer);
