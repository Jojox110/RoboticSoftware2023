import React from  'react';
import styles from '../../../Styles/AdminPanel.module.css'
import ljr from '../../../SchoolLogos/Logo_LJR_brun_jaune.png'

export function AdminTeamDisplayComponent(props) {
    return (
        <div className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                 <button>
                     <img src={ljr} alt='LJR logo' />
                 </button>
                <div>Amount of points</div>
                <div className={styles.teamDisplayButtonsContainer}>
                    <button className={styles.teamDisplayButtons}>+</button>
                    <button className={styles.teamDisplayButtons}>-</button>
                </div>
            </div>
        </div>
    )
}