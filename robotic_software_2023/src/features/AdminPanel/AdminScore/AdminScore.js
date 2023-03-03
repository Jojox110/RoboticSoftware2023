import React from "react";
import {useDispatch} from "react-redux";

import {Header} from "../../Header/Header";
import {AdminTeamDisplayComponent} from "./AdminTeamDisplayComponent";

import styles from '../../../Styles/AdminPanel.module.css'

export function AdminScore() {
  return (
    <div className={styles.body}>
      <Header />
      <article className={styles.scoreBoardGrid}>
        <section className={styles.scores}>
          <AdminTeamDisplayComponent id={0}/>
          <AdminTeamDisplayComponent id={1} />
          <AdminTeamDisplayComponent id={2} />
        </section>
      </article>
    </div>
  );
}
