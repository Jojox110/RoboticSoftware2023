import React from "react";
import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function ScoreBoardAll() {
  return (
    <div>
      <Header />
      <div className={styles.center}>
        <article className={styles.teamDisplayGrid}>
            <TeamDisplayComponent placeNumber={"First Place"} />
            <TeamDisplayComponent placeNumber={"Second Place"} />
            <TeamDisplayComponent placeNumber={"Third Place"} />
            <TeamDisplayComponent placeNumber={"Fourth Place"} />
            <TeamDisplayComponent placeNumber={"Fifth Place"} />
            <TeamDisplayComponent placeNumber={"Sixth Place"} />
            <TeamDisplayComponent placeNumber={"Seventh Place"} />
            <TeamDisplayComponent placeNumber={"Eighth Place"} />
            <TeamDisplayComponent placeNumber={"Nineth Place"} />
            <TeamDisplayComponent placeNumber={"Tenth Place"} />
            <TeamDisplayComponent placeNumber={"Eleventh Place"} />
        </article>
      </div>

    </div>
  );
}
