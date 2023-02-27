import React from 'react';
import styles from '../../Styles/CommingSoonStyling.module.css'

export function CommingSoon() {
    return (
        <div>
            <p className={styles.header}>Place au Robots 2023</p>
            <div className={styles.center}>
                <p className={styles.box}>
                    <p className={styles.text}>À venir bientot</p>
                    <p className={styles.text}>Mai 2023</p>
                </p>
            </div>
        </div>
    )
}