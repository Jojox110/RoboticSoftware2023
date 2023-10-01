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
import esn from '../../../SchoolLogos/ESN.png'
import odc from '../../../SchoolLogos/ODC.png'
import prp from '../../../SchoolLogos/PRP.png'
import sdc from '../../../SchoolLogos/SdC.png'
import wal from '../../../SchoolLogos/WAL.png'
import am from '../../../SchoolLogos/AM.png'
import cda from '../../../SchoolLogos/cda.png'

// const socket = io.connect("http://localhost:5000")

let currentRoundNumber = undefined;
let isLoaded = false

let team1 = ''
let team2 = ''
let team3 = ''

export function ScoreBoardAll() {
    const dispatch = useDispatch()
    const [isDataRetrieved, setIsDataRetrieved] = useState(false)
    let teams  = useSelector(state => state.allTeams[0])
    let scores = useSelector(state => state.allScores[0])
    let scheduledTeams = useSelector(state => state.currentRound[0])

    const fetchData = async () => {
        console.log("fetch data")
        await fetch('http://test2.placeauxrobots.ca/teams/')
            .then(res => {
                return res.json()
            })
            .then(res => {
                res = res[0]
                console.log("res", res)
                let teams = ['', '', '', '', '', '', '', '', '', '', '', '']
                let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                for (let i = 0; i < 12; i++) {
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
        await fetch('http://test2.placeauxrobots.ca/info')
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("testing testing", res[0])
                currentRoundNumber = res[0][0].currentRoundNumber
                console.log("testing testing currentroundnumber set", currentRoundNumber)
            })

        fetch(`http://test2.placeauxrobots.ca/schedule/${currentRoundNumber}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: 'currentRound/setCurrentRound',
                    payload: {
                        team1: [res[0][0].teamname, res[0][0].imgpath],
                        team2: [res[0][1].teamname, res[0][1].imgpath],
                        team3: [res[0][2].teamname, res[0][2].imgpath]
                    }
                })
                console.log(store.getState(), "asfsfasfasdf", currentRoundNumber)
                isLoaded = true
                team1 = store.getState().currentRound.team1[0]
                team2 = store.getState().currentRound.team2[0]
                team3 = store.getState().currentRound.team3[0]
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

    const contentLoaded = (
        <div className={styles.body}>
            <Header/>
            <div className={styles.center}>
                <article className={styles.teamDisplayGrid}>
                    <TeamDisplayComponent teamname={teams[0]} score={scores[0]} img={ljr}/>
                    <TeamDisplayComponent teamname={teams[1]} score={scores[1]} img={wal}/>
                    <TeamDisplayComponent teamname={teams[2]} score={scores[2]} img={prp}/>
                    <TeamDisplayComponent teamname={teams[3]} score={scores[3]} img={cc}/>
                    <TeamDisplayComponent teamname={teams[4]} score={scores[4]} img={aqv}/>
                    <TeamDisplayComponent teamname={teams[5]} score={scores[5]} img={am}/>
                    <TeamDisplayComponent teamname={teams[6]} score={scores[6]} img={sdc}/>
                    <TeamDisplayComponent teamname={teams[7]} score={scores[7]} img={eme}/>
                    <TeamDisplayComponent teamname={teams[8]} score={scores[8]} img={odc}/>
                    <TeamDisplayComponent teamname={teams[9]} score={scores[9]} img={esn}/>
                    <TeamDisplayComponent teamname={teams[10]} score={scores[10]} img={cdj}/>
                    <TeamDisplayComponent teamname={teams[11]} score={scores[11]} img={cda}/>
                </article>
            </div>
            <section className={styles.nextRound}>
                <p>La prochaine ronde:</p>
                <section className={styles.nextRoundContainer}>
                    <div>{team1}</div>
                    <div>
                        <div className={styles.nextRoundCenterTeam}>{team2}</div>
                    </div>
                    <div>{team3}</div>
                </section>
            </section>

        </div>
    )

    const contentLoading = (
        <div>Loading...</div>
    )

    return (
        <div>{isLoaded ? contentLoaded : contentLoading}</div>
    );
}
