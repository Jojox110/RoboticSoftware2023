import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'

import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'
import timerStyles from '../../../Styles/Timer.module.css'
import io from "socket.io-client";
import {store} from "../../../store";
import {TimerComponent} from "./TimerComponent";

// const socket = io({transports: ['http://localhost:5000']});

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
let schoolLogos = [null, null, null];

export function ScoreBoardCurrent() {
    // useEffect(() => {
    //     socket.on("receiveScoreUpdate", (data) => {
    //         console.log(data)
    //     })
    // }, [socket])
    const teams = useSelector((state) => state.currentRoundTeams)
    const scores = useSelector((state) => state.currentRoundScores)
    const dispatch = useDispatch()

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

        isLoaded = true
        getSchoolLogo()
    }

    const getData = () => {
        try {
            fetch('http://test2.placeauxrobots.ca/currentround/')
                .then (res => {
                    const x = res.json()
                    console.log("testing testing testing", x)
                    return x
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

    function getSchoolLogo() {
        // const schoolLogoPath = store.getState().currentRoundTeams[props.id][3]
        // console.log(schoolLogoPath, "displayid", props.id)
        const schoolLogoPaths = [store.getState().currentRoundTeams[0][3], store.getState().currentRoundTeams[1][3], store.getState().currentRoundTeams[2][3]]
        for (let i = 0; i < 3; i++) {
            if (schoolLogoPaths[i] === 'ljr') {
                schoolLogos[i] = ljr
            }
            else if (schoolLogoPaths[i] === 'aqv') {
                schoolLogos[i] = aqv
            }
            else if (schoolLogoPaths[i] === 'cc') {
                schoolLogos[i] = cc
            }
            else if (schoolLogoPaths[i] === 'cdj') {
                schoolLogos[i] = cdj
            }
            else if (schoolLogoPaths[i] === 'eme') {
                schoolLogos[i] = eme
            }
            else if (schoolLogoPaths[i] === 'esn') {
                schoolLogos[i] = esn
            }
            else if (schoolLogoPaths[i] === 'odc') {
                schoolLogos[i] = odc
            }
            else if (schoolLogoPaths[i] === 'prp') {
                schoolLogos[i] = prp
            }
            else if (schoolLogoPaths[i] === 'sdc') {
                schoolLogos[i] = sdc
            }
            else if (schoolLogoPaths[i] === 'wal') {
                schoolLogos[i] = wal
            }
            else if (schoolLogoPaths[i] === 'am') {
                schoolLogos[i] = am
            }
            else {
                console.log("asfhjaskjd hflkjas dhfkjasd hfkjlsdahfjklasdhfkjls adhfkj lshadkf", schoolLogoPaths[i])
            }
        }
    }

    const loadContent = (
        <div className={styles.body}>
            <Header />
            <article className={styles.mobileContainer}>
                <div className={timerStyles.timerSection} >
                    <TimerComponent id={0}/>
                </div>
                <section className={styles.scoreBoardGrid}>
                    <div className={styles.scores}>
                        <TeamDisplayComponent id={0} src={schoolLogos[0]} amountOfPoints={store.getState().currentRoundScores[0]} teamname={store.getState().currentRoundTeams[0][0]}/>
                        <TeamDisplayComponent id={1} src={schoolLogos[1]} amountOfPoints={store.getState().currentRoundScores[1]} teamname={store.getState().currentRoundTeams[1][0]}/>
                        <TeamDisplayComponent id={2} src={schoolLogos[2]} amountOfPoints={store.getState().currentRoundScores[2]} teamname={store.getState().currentRoundTeams[2][0]}/>
                    </div>
                </section>
            </article>
        </div>
    )

    const loading = (
        <div>Loading...</div>
    )

  return (
    <div>
        {isLoaded ? loadContent : loading}
    </div>
  );
}
