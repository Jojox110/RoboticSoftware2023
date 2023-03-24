import React, {useEffect, useState} from "react";
import {Header} from "../../Header/Header";
import {TeamDisplayComponent} from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'
import {useDispatch} from "react-redux";
import {store} from '../../../store'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000")

export function ScoreBoardAll() {
    const dispatch = useDispatch()
    const [isDataRetrieved, setIsDataRetrieved] = useState(false)

    const fetchData = () => {
        console.log("fetch data")
        fetch('http://localhost:5000/users/')
            .then(res => {
                return res.json()
            })
            .then(res => {
                let teams = ['', '', '', '', '', '', '', '', '', '', '']
                let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                for (let i = 0; i < 11; i++) {
                    teams[res[i].id - 1] = res[i].teamname
                    scores[res[i].id - 1] = res[i].amountofpoints
                }

                dispatch({
                    type: 'allTeams/showAllTeams',
                    payload: {
                        teams: teams
                    }
                })
                dispatch({
                    type: 'allScores/showAllScores',
                    payload: {
                        scores: scores
                    }
                })
            })
    }

    fetchData()

    useEffect(() => {
        setTimeout(() => {
            setIsDataRetrieved(true)
        }, 400)
        socket.on("receiveAllTeamScoreUpdate", (data) => {
            console.log("receiveAllTeamScoreUpdate", data)
        })
    })

    if (!isDataRetrieved) {
        return (
            <div>Loading ...</div>
        )
    }
    const teams = store.getState().allTeams[0]
    const scores = store.getState().allScores[0]

    return (<div className={styles.body}>
        <Header/>
        <div className={styles.center}>
            <article className={styles.teamDisplayGrid}>
                <TeamDisplayComponent teamname={teams[0]} score={scores[0]}/>
                <TeamDisplayComponent teamname={teams[1]} score={scores[1]}/>
                <TeamDisplayComponent teamname={teams[2]} score={scores[2]}/>
                <TeamDisplayComponent teamname={teams[3]} score={scores[3]}/>
                <TeamDisplayComponent teamname={teams[4]} score={scores[4]}/>
                <TeamDisplayComponent teamname={teams[5]} score={scores[5]}/>
                <TeamDisplayComponent teamname={teams[6]} score={scores[6]}/>
                <TeamDisplayComponent teamname={teams[7]} score={scores[7]}/>
                <TeamDisplayComponent teamname={teams[8]} score={scores[8]}/>
                <TeamDisplayComponent teamname={teams[9]} score={scores[9]}/>
                <TeamDisplayComponent teamname={teams[10]} score={scores[10]}/>
            </article>
        </div>
        <section className={styles.nextRound}>
            <p>Next round</p>
            <section className={styles.nextRoundContainer}>
                <div>Team 1</div>
                <div>Team 2</div>
                <div>Team 3</div>
            </section>
        </section>

    </div>);
}
