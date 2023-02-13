import React from "react";
import { useDispatch } from "react-redux";

import { Header } from "../../Header/Header";
import { AdminTeamDisplayComponent } from "./AdminTeamDisplayComponent";

import {
  scoreBoardGrid,
  teams,
  scores,
  body,
  teamsTable,
  teamsButton,
  teamDisplayStyling,
} from "./AdminScoreStyling";

export function AdminScore() {
  const dispatch = useDispatch();

  const updateTeamDisplayScore = (teamID) => {};

  const onTeamButtonClick = (event) => {
    // if (teamDisplays.length === 3) {
    //   alert("Already have 3 teams");
    //   teamDisplays.length = 0;
    //   return;
    // }

    //renderTeamDisplay(1);
    console.log(event);
  };

  return (
    <div style={body}>
      <Header />
      <article style={scoreBoardGrid}>
        {/* <section style={teams}>
          <table>
            <tbody>
              <tr style={teamsTable}>
                <td>
                  <button style={teamsButton} value={1}>
                    team1
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section> */}
        <section style={scores}>
          <AdminTeamDisplayComponent teamName={"team1"} />
          <AdminTeamDisplayComponent teamName={"team2"} />
          <AdminTeamDisplayComponent teamName={"team3"} />
        </section>
      </article>
    </div>
  );
}
