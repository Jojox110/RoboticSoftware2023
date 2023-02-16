import React from "react";
import {Header} from "../../Header/Header";
import {TeamDisplayComponent} from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function ScoreBoardAll() {
    return (<div className={styles.body}>
        <Header/>
        <div className={styles.center}>
            <article className={styles.teamDisplayGrid}>
                <TeamDisplayComponent placeNumber={"First Place"}/>
                <TeamDisplayComponent placeNumber={"Second Place"}/>
                <TeamDisplayComponent placeNumber={"Third Place"}/>
                <TeamDisplayComponent placeNumber={"Fourth Place"}/>
                <TeamDisplayComponent placeNumber={"Fifth Place"}/>
                <TeamDisplayComponent placeNumber={"Sixth Place"}/>
                <TeamDisplayComponent placeNumber={"Seventh Place"}/>
                <TeamDisplayComponent placeNumber={"Eighth Place"}/>
                <TeamDisplayComponent placeNumber={"Nineth Place"}/>
                <TeamDisplayComponent placeNumber={"Tenth Place"}/>
                <TeamDisplayComponent placeNumber={"Eleventh Place"}/>
            </article>
        </div>
        <section className={styles.nextRound}>
            <div>Team 1</div>
            <div>Team 2</div>
            <div>Team 3</div>
        </section>

    </div>);
}
