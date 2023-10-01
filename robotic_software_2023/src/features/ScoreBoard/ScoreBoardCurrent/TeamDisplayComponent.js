import React from 'react';
import {store} from "../../../store";

import styles from '../../../Styles/ScoreBoardStyling.module.css'
import {useDispatch, useSelector} from "react-redux";


let isLoaded = false
let schoolLogo = null;

// const socket = io.connect("http://localhost:5000")

export function TeamDisplayComponent(props) {
    const teams = useSelector((state) => state.currentRoundTeams)
    const scores = useSelector((state) => state.currentRoundScores)
    const dispatch = useDispatch()

    // const showCurrentTeams = (teams) => {
    //     teams = teams[0]
    //     let team1 = teams[0]
    //     let team2 = teams[1]
    //     let team3 = teams[2]
    //
    //     dispatch({
    //         type: 'currentRoundTeams/showCurrentTeams',
    //         payload: {
    //             team1: [team1.teamname, team1.amountofpoints, team1.displayid, team1.imgpath],
    //             team2: [team2.teamname, team2.amountofpoints, team2.displayid, team2.imgpath],
    //             team3: [team3.teamname, team3.amountofpoints, team3.displayid, team3.imgpath]
    //         }
    //     })
    //
    //     dispatch({
    //         type: 'currentRoundScores/showCurrentPoints',
    //         payload: {
    //             team1: team1.amountofpoints,
    //             team2: team2.amountofpoints,
    //             team3: team3.amountofpoints
    //         }
    //     })
    //
    //     isLoaded = true
    //     console.log(props.id)
    //     console.log(store.getState().currentRoundTeams[props.id])
    //     getSchoolLogo()
    //
    // }
    //
    // const getData = () => {
    //     try {
    //         fetch('http://test2.placeauxrobots.ca/currentround/')
    //             .then (res => {
    //                 const x = res.json()
    //                 console.log("testing testing testing", x)
    //                 return x
    //             })
    //             .then (res => {
    //                 showCurrentTeams(res)
    //             })
    //     }
    //     catch (err) {
    //         console.log("get data", err)
    //     }
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, [])
    //
    // // useEffect(() => {
    // //     getData()
    // //     socket.on("receiveScoreUpdate", (data) => {
    // //         console.log("received", data)
    // //         dispatch({
    // //             type: 'currentRoundScores/updateTeamPoint',
    // //             payload: data
    // //         })
    // //     })
    // //     socket.on("receiveTeamUpdate", (data) => {
    // //         console.log("received team update")
    // //         dispatch({
    // //             type: 'currentRoundTeams/swapTeam',
    // //             payload: {newTeam: data.teamname, newScore: 0, id:data.id}
    // //         })
    // //     })
    // // }, [socket])
    //
    // function getSchoolLogo() {
    //     const schoolLogoPath = store.getState().currentRoundTeams[props.id][3]
    //     console.log(schoolLogoPath, "displayid", props.id)
    //     if (schoolLogoPath === '../../../SchoolLogos/LJR.png') {
    //         schoolLogo = ljr
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/AQV.png') {
    //         schoolLogo = aqv
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/CC.png') {
    //         schoolLogo = cc
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/CdJ.png') {
    //         schoolLogo = cdj
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/EME.png') {
    //         schoolLogo = eme
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/ESN.png') {
    //         schoolLogo = esn
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/ODC.png') {
    //         schoolLogo = odc
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/PRP.png') {
    //         schoolLogo = prp
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/SdC.png') {
    //         schoolLogo = sdc
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/WAL.png') {
    //         schoolLogo = wal
    //     }
    //     else if (schoolLogoPath === '../../../SchoolLogos/AM.png') {
    //         schoolLogo = am
    //     }
    //     else {
    //         console.log("asfhjaskjd hflkjas dhfkjasd hfkjlsdahfjklasdhfkjls adhfkj lshadkf")
    //     }
    //     console.log("displayid", props.id, "schoollogo", schoolLogo)
    // }
    //
    // const contentLoading = (
    //     <div>Loading...</div>
    // )
    //
    // const contentLoaded = (
    //     <article className={styles.teamDisplayStylingCurrent}>
    //         <div className={styles.teamDisplayGap}>
    //             <div>
    //                 <img src={schoolLogo} alt="todo" />
    //                 <p>{store.getState().currentRoundScores[props.id]}</p>
    //             </div>
    //             <section className={styles.flexStart}>
    //                 <p>AMOUNT OF POINTS:</p>
    //                 <p>POINTS</p>
    //             </section>
    //         </div>
    //     </article>
    // )

    console.log("props.src", props.src, "props.id", props.id, props.teamname)

    return (
        <article className={styles.teamDisplayStylingCurrent}>
            <div className={styles.teamDisplayGap}>
                <div>
                    <img src={props.src} alt="todo"/>
                    <p className={styles.teamname}>{props.teamname}</p>
                </div>
                <section className={styles.flexStart}>
                    <p>Montant de points:</p>
                    <p>{props.amountOfPoints}</p>
                </section>
            </div>
        </article>
    )
}
