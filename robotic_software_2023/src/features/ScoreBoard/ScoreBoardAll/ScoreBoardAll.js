import React, {useEffect, useState} from "react";
import {Header} from "../../Header/Header";
import {TeamDisplayComponent} from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'
import {useDispatch, useSelector} from "react-redux";
import {store} from '../../../store'
import io from 'socket.io-client'

import mm from '../../../SchoolLogos/MM.png'
import ljr from '../../../SchoolLogos/LJR.png'
import aqv from '../../../SchoolLogos/AQV.png'
import cc from '../../../SchoolLogos/CC.png'
import cdj from '../../../SchoolLogos/CdJ.png'
import eme from '../../../SchoolLogos/EME.png'
import esa from '../../../SchoolLogos/ESA.png'
import esn from '../../../SchoolLogos/ESN.png'
import odc from '../../../SchoolLogos/ODC.png'
import prp from '../../../SchoolLogos/PRP.png'
import sdc from '../../../SchoolLogos/SdC.png'
import wal from '../../../SchoolLogos/WAL.png'

// const socket = io.connect("http://localhost:5000")

export function ScoreBoardAll() {
    const dispatch = useDispatch()
    const [isDataRetrieved, setIsDataRetrieved] = useState(false)
    let teams  = useSelector(state => state.allTeams[0])
    let scores = useSelector(state => state.allScores[0])

    const fetchData = () => {
        console.log("fetch data")
        fetch('http://localhost:5000/users/')
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("res", res)
                let teams = ['', '', '', '', '', '', '', '', '', '', '']
                let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                for (let i = 0; i < 11; i++) {
                    teams[res[i].ID - 1] = res[i].teamname
                    scores[res[i].ID - 1] = res[i].amountofpoints
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
    useEffect(() => {
        setTimeout(() => {
            fetchData()
            setIsDataRetrieved(true)
        }, 400)
    //     socket.on("receiveAllTeamScoreUpdate", (data) => {
    //         fetchData()
    //         console.log("receiveDataAllTeams ScoreBoardAll.js")
    //         console.log("state 1", store.getState(), "currentTeam", data.teamame)
    //         console.log(data, "eeeeeeeeeeeeeeeeeeeeeeee")
    //         dispatch({
    //             type: 'allScores/changeAllScores',
    //             payload: data
    //         })
    //         console.log("state 2", store.getState())
    //     })
    //     // socket.on("receiveTeamUpdate", (data) => {
    //     //     console.log("receiveTeamUpdate ScoreBoardAll.js")
    //     //     dispatch({
    //     //         type: 'currentRoundTeams/swapTeam',
    //     //         payload: {newTeam: data.teamname, newScore: 0, id:data.id}
    //     //     })
    //     // })
    }, [])

    if (!isDataRetrieved) {
        return (
            <div>Loading ...</div>
        )
    }
    else {
        console.log("teams", teams)
        console.log("scores", scores)

        console.log("teams v2", store.getState().allTeams)
        console.log("scores v2", store.getState().allScores)

    }

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
