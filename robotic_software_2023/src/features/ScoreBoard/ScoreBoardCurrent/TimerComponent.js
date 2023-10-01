import React, {useEffect, useState} from 'react';
import {DateTime} from 'luxon';
import {useDispatch, useSelector} from "react-redux";
import styles from '../../../Styles/Timer.module.css'
import {store} from '../../../store'

let y = ''
let diff = ''
let x = ''
let z = false
let currentRoundIncreased = false
let timerOn = false
let startupDone = false

fetch('https://test2.placeauxrobots.ca/getTimerStatus')
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(typeof res[0][0].TimerOn)
        if (res[0][0].TimerOn === "1")  {
            timerOn = true
            console.log("timerOn = true")
        }
    })

export function TimerComponent(props) {
    const [timeRemaining, setTimeRemaining] = useState(180);
    const dispatch = useDispatch()
    const timerSelector = useSelector(state => state.timerTime)

    const turnTimerOff = async () => {
        dispatch({
            type: 'timerStatus/changeTimerStatus', payload: true
        })
        await fetch('https://test2.placeauxrobots.ca/changeTimerOff')
    }

    const increaseCurrentRound = async () => {
        if (props.id === 1 && !currentRoundIncreased) {
            currentRoundIncreased = true
            await fetch('https://test2.placeauxrobots.ca/incrementCurrentRound')
        }
    }

    const fetchTimerEnd = () => {
        fetch('https://test2.placeauxrobots.ca/info')
            .then(res => {
                return res.json()
            })
            .then(res => {
                if (!store.getState().timerStatus) {
                    y = DateTime.fromISO(res[0][0].timerEnd)
                    diff = y.diff(DateTime.local(), ['minutes', 'seconds']) / 1000
                    setTimeRemaining(Math.round(diff))
                }
            })

    }

    const startTimer = async () => {
        z = false
        currentRoundIncreased = false
        const timerEnd = DateTime.local().plus({minutes: 6});
        await fetch(`https://test2.placeauxrobots.ca/changeTimerEnd/${timerEnd}`)
        await fetch('https://test2.placeauxrobots.ca/changeTimerOn')
        dispatch({
            type: 'timerTime/setTimerEnd', payload: timerEnd.toISO()
        })
        dispatch({
            type: 'timerStatus/changeTimerStatus', payload: false
        })
    }

    const startTimerButNoRestart = async () => {
        z = false
        currentRoundIncreased = false
        await fetch('https://test2.placeauxrobots.ca/changeTimerOn')
        dispatch({
            type: 'timerStatus/changeTimerStatus', payload: false
        })
    }


    useEffect( () => {
        //if (store.getState().timerStatus === false) {
        fetchTimerEnd()
        if (timerOn && !startupDone) {
            startupDone = true
            startTimerButNoRestart()
            console.log("asdfsdafsadfdasf")
        }
        const interval = setInterval(() => {
            if (z) {
                turnTimerOff()
                z = false
                increaseCurrentRound()
                //setTimeRemaining(600)
            }
            if (!store.getState().timerStatus) {
                setTimeRemaining(prevTime => prevTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [timerSelector]);

    const minutes = Math.trunc(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    x = `${minutes}:${seconds}`

    if (timeRemaining === 0) {
        z = true
        x = "3:00"
        setTimeRemaining(180)
    } else if (seconds < 10) {
        seconds = "0" + seconds
        x = `${minutes}:${seconds}`
    }



    return (<div className={styles.container}>
        <div></div>
        <div>
            <div className={styles.timer}>
                {x}
            </div>
        </div>
        {props.id === 1 ? <button className={styles.buttonStyling} onClick={startTimer}/> : <div></div>}
    </div>);
}