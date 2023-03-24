import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../store.js'
import io from 'socket.io-client'

import styles from '../../../Styles/AdminPanel.module.css'
import mm from '../../../SchoolLogos/Logo_Mathieu-Martin.png'

const socket = io.connect('http://localhost:5000');

export function AdminTeamDisplayComponent(props) {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.currentRoundTeams)
    const scores = useSelector((state) => state.currentRoundScores)

    const sendScoreData = () => {
        const teamname = store.getState().currentRoundTeams[props.id]
        const newScore = store.getState().currentRoundScores[props.id]
        const id = props.id
        socket.emit("changeScore", {teamname: teamname, newScore: newScore, id: id})
        console.log("score data sent")
    }

    const swapTeam = (teamName, id)  => {
        const finalScore = store.getState().currentRoundScores[props.id]
        socket.emit("receiveAllTeamScoreUpdate", {teamname: teamName, id: id, finalScore: finalScore})
        //socket.emit("receiveScoreUpdate", {teamname: teamName, id: id, newScore: 0})
        dispatch({
            type: 'currentRoundTeams/swapTeam',
            payload: {
                newTeam: teamName,
                id: id,
            }
        })
    }

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
            type: 'currentroundScores/showCurrentPoints',
            payload: {
                team1: team1.amountofpoints,
                team2: team2.amountofpoints,
                team3: team3.amountofpoints,
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

    const changeTeamNameData = (newTeam, finalAmountOfPoints, currentTeam) => async () => {
        try{
            const newData = {displayID: props.id, newTeam: newTeam, finalAmountOfPoints: finalAmountOfPoints, currentTeam:currentTeam}
            await fetch(`http://localhost:5000/currentround/teams/${props.id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newData)
            })
            await swapTeam(newTeam, props.id)
            console.log(store.getState().currentRoundTeams)
        }
        catch (err) {
            console.log(err)
        }
        await getData()
    }

    const changeCurrentRoundPointData = (action) => async (event) => {
        console.log(props.id, "ididididididididididsi")
        if (action === "increment") {
            dispatch({
                type: 'currentRoundScores/increment',
                payload: props.id,
            })
        }
        else if (action === "decrement") {
            dispatch({
                type: 'currentRoundScores/decrement',
                payload: props.id,
            })
        }
        console.log(store.getState().currentRoundScores)
        console.log(JSON.stringify(store.getState().currentRoundScores))

        const newData  = {newScore: store.getState().currentRoundScores[props.id]}
        console.log("new data", newData, props.id)
        await fetch(`http://localhost:5000/currentround/scores/${props.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        await sendScoreData()
    }

    // const fetchData = async() => {
    //     fetch('http://localhost:5000/currentround/')
    //         .then(res => {
    //             return res.json()
    //         })
    // }
    //
    useEffect(() => {
        socket.on("receiveScoreUpdate", (data) => {
            console.log("score update received")
            dispatch({
                type: 'currentRoundScores/updateTeamPoint',
                payload: data
            })
        })
    }, [socket])

    const finalScore = store.getState().currentRoundScores[props.id]
    const currentTeam = store.getState().currentRoundTeams[props.id][0]

    return (
        <div className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                <div>
                    <img src={mm} alt='MM logo' />
                    <div className={styles.teamDisplayImage}>
                        <div className={styles.teamDisplayDropdown}>
                            <button onClick={changeTeamNameData('team1', finalScore, currentTeam)}>Team 1</button>
                            <button onClick={changeTeamNameData('team2', finalScore, currentTeam)}>Team 2</button>
                            <button onClick={changeTeamNameData('team3', finalScore, currentTeam)}>Team 3</button>
                            <button onClick={changeTeamNameData('team4', finalScore, currentTeam)}>Team 4</button>
                            <button onClick={changeTeamNameData('team5', finalScore, currentTeam)}>Team 5</button>
                            <button onClick={changeTeamNameData('team6', finalScore, currentTeam)}>Team 6</button>
                            <button onClick={changeTeamNameData('team7', finalScore, currentTeam)}>Team 7</button>
                            <button onClick={changeTeamNameData('team8', finalScore, currentTeam)}>Team 8</button>
                            <button onClick={changeTeamNameData('team9', finalScore, currentTeam)}>Team 9</button>
                            <button onClick={changeTeamNameData('team10', finalScore, currentTeam)}>Team 10</button>
                            <button onClick={changeTeamNameData('team11', finalScore, currentTeam)}>Team 11</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{store.getState().currentRoundTeams[props.id][0]}</p>
                    <p>{scores[props.id]}</p>
                </div>
                <div className={styles.teamDisplayButtonsContainer}>
                    <button className={styles.teamDisplayButtons} onClick={changeCurrentRoundPointData("increment")}>+</button>
                    <button className={styles.teamDisplayButtons} onClick={changeCurrentRoundPointData("decrement")}>-</button>
                </div>
            </div>
        </div>
    )
}