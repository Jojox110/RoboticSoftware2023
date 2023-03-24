import React, {useEffect} from "react";
import {store} from "../../../store";
import {useDispatch} from "react-redux";
import {Header} from "../../Header/Header";
import {AdminTeamDisplayComponent} from "./AdminTeamDisplayComponent";

import styles from '../../../Styles/AdminPanel.module.css'


export function AdminScore() {
    const dispatch = useDispatch()

    const showCurrentInfo = (teams) => {
        let team1 = []
        let team2 = []
        let team3 = []

        for (let i = 0; i < 3; i++) {
            if (teams[i].displayid === 0) {
                team1 = teams[i]
            }
            else if (teams[i].displayid === 1) {
                team2 = teams[i]
            }
            else  if (teams[i].displayid === 2) {
                team3 = teams[i]
            }
        }

        console.log("teams 1 2 3",team1, team2, team3)

        dispatch({
            type: 'currentRoundTeams/showCurrentTeams',
            payload: {
                team1: [team1.teamname, team1.amountofpoints, team1.displayid],
                team2: [team2.teamname, team2.amountofpoints, team2.displayid],
                team3: [team3.teamname, team3.amountofpoints, team3.displayid]
            }
        })

        dispatch({
            type: 'currentRoundScores/showCurrentPoints',
            payload: {
                team1: team1.amountofpoints,
                team2: team2.amountofpoints,
                team3: team3.amountofpoints,
            }
        })
    }

    const getData = async () => {
        console.log('a')
        try {
            await fetch('http://localhost:5000/currentround/')
                .then (res => {
                    return res.json()
                })
                .then (res => {

                    showCurrentInfo(res)
                })
        }
        catch (err) {
            console.log("get data", err)
        }
    }

    getData()

    return (
        <div className={styles.body}>
            <Header/>
            <article className={styles.scoreBoardGrid}>
                <section className={styles.scores}>
                    <AdminTeamDisplayComponent id={0}/>
                    <AdminTeamDisplayComponent id={1}/>
                    <AdminTeamDisplayComponent id={2}/>
                </section>
            </article>
        </div>
    );
}
