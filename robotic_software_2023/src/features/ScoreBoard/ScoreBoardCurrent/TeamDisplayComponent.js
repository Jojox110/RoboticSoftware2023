import React, {useEffect} from 'react';
import {store} from "../../../store";

import styles from '../../../Styles/ScoreBoardStyling.module.css'
import {useDispatch, useSelector} from "react-redux";

export function TeamDisplayComponent(props) {
    const teams = useSelector((state) => state.currentRoundTeams)
    const scores = useSelector((state) => state.currentRoundScores)
    const dispatch = useDispatch()

    const showCurrentTeams = (teams) => {
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
                team3: team3.amountofpoints
            }
        })
    }

    const getData = async () => {
        try {
            await fetch('http://localhost:5000/currentround/')
                .then (res => {
                    return res.json()
                })
                .then (res => {
                    showCurrentTeams(res)
                })
        }
        catch (err) {
            console.log("get data", err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <article className={styles.teamDisplayStylingCurrent}>
            <div className={styles.teamDisplayGap}>
                <div>
                    <p className={styles.teamImageDummyCurrent}>{teams[props.id][0]}</p>
                    <p>{store.getState().currentRoundScores[props.id]}</p>

                </div>
                <section className={styles.flexStart}>
                    <p>AMOUNT OF POINTS:</p>
                    <p>POINTS</p>
                </section>
            </div>
        </article>
    )
}
