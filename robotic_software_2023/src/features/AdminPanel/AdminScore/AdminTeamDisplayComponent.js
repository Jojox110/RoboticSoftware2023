import React from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../../../store.js'

import styles from '../../../Styles/AdminPanel.module.css'
import mm from '../../../SchoolLogos/Logo_Mathieu-Martin.png'

export function AdminTeamDisplayComponent(props) {
    const dispatch = useDispatch()

    const changeTeamDisplay = (teamName) => (event) => {
        dispatch({
            type: 'currentRoundTeams/removeTeam',
            payload: {
                oldTeamId: props.id,
                newTeam: teamName,
            }
        })
        dispatch({
            type: 'currentRoundTeams/addTeam',
            payload: {
                oldTeamId: props.id,
                newTeam: teamName,
            }
        })
    }

    console.log(store.getState().currentRoundTeams)

    return (
        <div className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                <div>
                    <img src={mm} alt='MM logo' />
                    <div className={styles.teamDisplayImage}>
                        <div className={styles.teamDisplayDropdown}>
                            <button>Team 1</button>
                            <button>Team 2</button>
                            <button>Team 3</button>
                            <button>Team 4</button>
                            <button onClick={changeTeamDisplay('team5')}>Team 5</button>
                            <button>Team 6</button>
                            <button>Team 7</button>
                            <button>Team 8</button>
                            <button>Team 9</button>
                            <button>Team 10</button>
                            <button>Team 11</button>
                        </div>
                    </div>
                </div>
                <div>{store.getState().currentRoundTeams[props.id]}</div>
                <div className={styles.teamDisplayButtonsContainer}>
                    <button className={styles.teamDisplayButtons}>+</button>
                    <button className={styles.teamDisplayButtons}>-</button>
                </div>
            </div>
        </div>
    )
}