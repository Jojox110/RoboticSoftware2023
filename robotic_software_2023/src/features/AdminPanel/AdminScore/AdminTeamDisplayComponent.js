import React from  'react';
import styles from '../../../Styles/AdminPanel.module.css'
import ljr from '../../../SchoolLogos/Logo_LJR_brun_jaune.png'
import mm from '../../../SchoolLogos/Logo_Mathieu-Martin.png'

export function AdminTeamDisplayComponent(props) {
    return (
        <div className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                 <div>
                     <img src={mm} alt='MM logo' />
                     <div>
                        <button>Team 1</button>
                        <button>Team 2</button>
                        <button>Team 3</button>
                        <button>Team 4</button>
                        <button>Team 5</button>
                        <button>Team 6</button>
                        <button>Team 7</button>
                        <button>Team 8</button>
                        <button>Team 9</button>
                        <button>Team 10</button>
                        <button>Team 11</button>
                     </div>
                 </div>
                <div>Amount of points</div>
                <div className={styles.teamDisplayButtonsContainer}>
                    <button className={styles.teamDisplayButtons}>+</button>
                    <button className={styles.teamDisplayButtons}>-</button>
                </div>
            </div>
        </div>
    )
}