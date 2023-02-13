import React from "react";

import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function ScoreBoardCurrent() {
  return (
    <div className={styles.body}>
      <Header />
      <article>
        <div className={styles.center} >
            <section className={styles.timer}>10:00</section>
        </div>
        <section className={styles.scoreBoardGrid}>
          <div className={styles.scores}>
            <TeamDisplayComponent />
            <TeamDisplayComponent />
            <TeamDisplayComponent />
          </div>
        </section>
      </article>
    </div>
  );
}
