import React from "react";
import {useDispatch} from "react-redux";

import {Header} from "../../Header/Header";
import {AdminTeamDisplayComponent} from "./AdminTeamDisplayComponent";

import styles from '../../../Styles/AdminPanel.module.css'

export function AdminScore() {
<<<<<<< HEAD
    return (<div className={styles.body}>
            <Header/>
            <article className={styles.scoreBoardGrid}>
                <section className={styles.scores}>
                    <AdminTeamDisplayComponent teamName={"team1"}/>
                    <AdminTeamDisplayComponent teamName={"team2"}/>
                    <AdminTeamDisplayComponent teamName={"team3"}/>
                </section>
            </article>
        </div>);
=======
  //const dispatch = useDispatch();

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
>>>>>>> 117dbe6 (sync)
}
