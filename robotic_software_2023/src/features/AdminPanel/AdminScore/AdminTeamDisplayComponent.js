import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../../../store.js'

import styles from '../../../Styles/AdminPanel.module.css'

//const socket = io.connect('http://127.0.0.1:5000');
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

let isLoaded = false
let schoolLogos = [null, null, null]

let currentTeam = ''
let finalScore = 0

// When updating score, it goes to the prior index
// ex: updating display 2 actually updates display 1 for scores. need to check changing teams

export function AdminTeamDisplayComponent(props) {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.currentRoundTeams)
    const scores = useSelector((state) => state.currentRoundScores)

    const sendScoreData = () => {
        const teamname = store.getState().currentRoundTeams[props.id][0]
        const newScore = store.getState().currentRoundScores[props.id]
        const id = props.id
        //socket.emit("changeScore", {teamname: teamname, newScore: newScore, id: id})
    }

    const swapTeam = (teamName, id, previousTeam) => {
        const finalScore = store.getState().currentRoundScores[props.id]
        //socket.emit("receiveAllTeamScoreUpdate", {teamname: teamName, id: id, finalScore: finalScore})
        dispatch({
            type: 'currentRoundTeams/swapTeam',
            payload: {
                newTeam: teamName,
                id: id,
            }
        })
        dispatch({
            type: 'currentRoundScores/resetTeamScore',
            payload: {
                newScore: 0,
                id: id,
            }
        })
        const x = ['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'team10', 'team11']
        // console.log("typeof previousteam", typeof previousTeam)
        const allTeamsId = x.indexOf(previousTeam)
        //console.log("allTeamsId", allTeamsId)
        //socket.emit("changeAllTeamScore", {teamname: teamName, id:allTeamsId, newScore: finalScore})
        //socket.emit("changeScore", {teamname: teamName, id: id, newScore: 0})
        //socket.emit("changeTeam", {teamname: teamName, id:id})
        //console.log("change score and change team emitted")
    }

    const showCurrentTeams = (teams) => {
        teams = teams[0]
        let team1 = teams[0]
        let team2 = teams[1]
        let team3 = teams[2]

        dispatch({
            type: 'currentRoundTeams/showCurrentTeams',
            payload: {
                team1: [team1.teamname, team1.amountofpoints, team1.displayid, team1.imgpath],
                team2: [team2.teamname, team2.amountofpoints, team2.displayid, team2.imgpath],
                team3: [team3.teamname, team3.amountofpoints, team3.displayid, team3.imgpath]
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
        console.log("team1", team1)
        console.log("team2", team2)
        console.log("team3", team3)
        console.log(store.getState())
        getSchoolLogos()
    }

    const getData = async () => {
        try {
            await fetch('http://test2.placeauxrobots.ca/currentround')
                .then(res => {
                    //console.log(res, "sadfsfasfjsdkjfksaljfklasjfkl;jsdlkfjkldsjfd")
                    return res.json()
                })
                .then(res => {
                    showCurrentTeams(res)
                })
        } catch (err) {
            console.log("get data", err)
        }
    }

    const changeTeamNameData = (newTeam, finalAmountOfPoints, currentTeam, imgpath) => async () => {
        finalScore = store.getState().currentRoundScores[props.id]
        currentTeam = store.getState().currentRoundTeams[props.id][0]
        try {
            const newData = {
                displayID: props.id,
                newTeam: newTeam,
                finalAmountOfPoints: finalAmountOfPoints,
                currentTeam: currentTeam
            };
            // put currentTeam in ID spot
            console.log("eeeeeeeeeeeeeeeeeee", currentTeam, newTeam, finalAmountOfPoints)
            await fetch(`http://test2.placeauxrobots.ca/changeTeam/${store.getState().currentRoundTeams[props.id][0]}/${finalAmountOfPoints}/${newTeam}/${imgpath}`)
            await swapTeam(newTeam, props.id, currentTeam);
        } catch (err) {
            console.log(err);
        }
        //console.log("await getData()");
        await getData();
    };

    const changeCurrentRoundPointData = (action) => async (event) => {
        //console.log(props.id, "ididididididididididsi")
        if (action === "increment") {
            dispatch({
                type: 'currentRoundScores/increment',
                payload: props.id,
            })
        } else if (action === "decrement") {
            dispatch({
                type: 'currentRoundScores/decrement',
                payload: props.id,
            })
        }
        //console.log(store.getState().currentRoundScores)
        //console.log(JSON.stringify(store.getState().currentRoundScores))

        const newData = {newScore: store.getState().currentRoundScores[props.id]}
        //console.log("new data", newData, props.id)
        await fetch(`http://test2.placeauxrobots.ca/changeScore/${props.id}/${store.getState().currentRoundScores[props.id]}`)

        //await sendScoreData()
    }

    useEffect(() => {
        getData()
    }, [])

    // const fetchData = async() => {
    //     fetch('http://localhost:5000/currentround/')
    //         .then(res => {
    //             return res.json()
    //         })
    // }
    //
    //useEffect(() => {
    //     socket.on("receiveScoreUpdate", (data) => {
    //         console.log("score update received", data)
    //         dispatch({
    //             type: 'currentRoundScores/updateTeamPoint',
    //             payload: data
    //         })
    //         console.log(store.getState())
    //     })
    // }, [socket])
    function getSchoolLogos() {
        const schoolLogoPaths = [store.getState().currentRoundTeams[0][3], store.getState().currentRoundTeams[1][3], store.getState().currentRoundTeams[2][3]]
        for (let i = 0; i < 3; i++) {
            if (schoolLogoPaths[i] === 'ljr') {
                schoolLogos[i] = ljr
            } else if (schoolLogoPaths[i] === 'aqv') {
                schoolLogos[i] = aqv
            } else if (schoolLogoPaths[i] === 'cc') {
                schoolLogos[i] = cc
            } else if (schoolLogoPaths[i] === 'cdj') {
                schoolLogos[i] = cdj
            } else if (schoolLogoPaths[i] === 'eme') {
                schoolLogos[i] = eme
            } else if (schoolLogoPaths[i] === 'esn') {
                schoolLogos[i] = esn
            } else if (schoolLogoPaths[i] === 'odc') {
                schoolLogos[i] = odc
            } else if (schoolLogoPaths[i] === 'prp') {
                schoolLogos[i] = prp
            } else if (schoolLogoPaths[i] === 'sdc') {
                schoolLogos[i] = sdc
            } else if (schoolLogoPaths[i] === 'wal') {
                schoolLogos[i] = wal
            } else if (schoolLogoPaths[i] === 'am') {
                schoolLogos[i] = am
            } else if (schoolLogoPaths[i] === "cda") {
                schoolLogos[i] = cda
            }
            else {
                console.log("asfhjaskjd hflkjas dhfkjasd hfkjlsdahfjklasdhfkjls adhfkj lshadkf", schoolLogoPaths[i])
            }
            isLoaded = true
        }
    }

    finalScore = store.getState().currentRoundScores[props.id]
    currentTeam = store.getState().currentRoundTeams[props.id][0]

    const contentLoaded = (
        <div className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                <div>
                    <img src={schoolLogos[props.id]} alt='MM logo' className={styles.imgStyling}/>
                    <p className={styles.teamname}>{currentTeam}</p>
                    <div className={styles.teamDisplayImage}>
                        <div className={styles.teamDisplayDropdown}>
                            <button
                                onClick={changeTeamNameData('Louis-J. Robichaud', finalScore, currentTeam, 'ljr')}>LJR
                            </button>
                            <button onClick={changeTeamNameData('W.-A. Losier', finalScore, currentTeam, 'wal')}>WAL
                            </button>
                            <button onClick={changeTeamNameData('Roland-Pépin', finalScore, currentTeam, 'prp')}>PRP
                            </button>
                            <button onClick={changeTeamNameData('Clément-Cormier', finalScore, currentTeam, 'cc')}>CC
                            </button>
                            <button
                                onClick={changeTeamNameData('Aux Quatres-Vents ', finalScore, currentTeam, 'aqv')}>AQV
                            </button>
                            <button onClick={changeTeamNameData('Antonine-Maillet', finalScore, currentTeam, 'am')}>AM
                            </button>
                            <button
                                onClick={changeTeamNameData('Samuel de Champlain', finalScore, currentTeam, 'sdc')}>SdC
                            </button>
                            <button onClick={changeTeamNameData('Marie-Esther', finalScore, currentTeam, 'eme')}>EME
                            </button>
                            <button onClick={changeTeamNameData('Odyssée', finalScore, currentTeam, 'odc')}>ODC</button>
                            <button onClick={changeTeamNameData('Nepisiguit', finalScore, currentTeam, 'esn')}>ESN</button>
                            <button
                                onClick={changeTeamNameData('Cité des jeunes', finalScore, currentTeam, 'cdj')}>CdJ
                            </button>
                            <button onClick={changeTeamNameData('Carrefour de l\'Acadie', finalScore, currentTeam, 'cda')}>CdA</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.teamname}>{store.getState().currentRoundTeams[props.id].teamname}</p>
                    <p className={styles.teamname}>{scores[props.id]}</p>
                </div>
                <div className={styles.teamDisplayButtonsContainer}>
                    <button className={styles.teamDisplayButtons} onClick={changeCurrentRoundPointData("increment")}>+
                    </button>
                    <button className={styles.teamDisplayButtons} onClick={changeCurrentRoundPointData("decrement")}>-
                    </button>
                </div>
            </div>
        </div>
    )

    const contentLoading = (
        <div>Loading...</div>
    )

    //console.log("schoolLogo", schoolLogos)
    return (
        <div>
            {isLoaded ? contentLoaded : contentLoading}
        </div>
    )
}