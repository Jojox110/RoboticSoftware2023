import React, {useEffect} from "react";
import {store} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../../Header/Header";
import {AdminTeamDisplayComponent} from "./AdminTeamDisplayComponent";
import {AdminLogin} from "../AdminLogin";
import {TimerComponent} from "../../ScoreBoard/ScoreBoardCurrent/TimerComponent";

import styles from '../../../Styles/AdminPanel.module.css'
import timerStyles from '../../../Styles/Timer.module.css'


export function AdminScore() {
    const dispatch = useDispatch()
    const loginStatus = useSelector(state => state.adminLogin)

    const loggedInScreen = (
        <div className={styles.body}>
            <Header/>
            <section className={timerStyles.timerSection}>
                <TimerComponent id={1}/>
            </section>
            <article className={styles.scoreBoardGrid}>
                <section className={styles.scores}>
                    <AdminTeamDisplayComponent id={0}/>
                    <AdminTeamDisplayComponent id={1}/>
                    <AdminTeamDisplayComponent id={2}/>
                </section>
            </article>
        </div>
    )

    const loginScreen = (
        <AdminLogin />
    )

    return (
        <div>
            {loginStatus ? loggedInScreen : loginScreen}
        </div>
    );
}
