import React from 'react';

import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent() {
    return (
        <article className={styles.teamDisplayStylingCurrent}>
            <div className={styles.teamDisplayGap}>
                <div className={styles.teamImageDummyCurrent}>Team Name</div>
                <section className={styles.flexStart}>
                    <p>AMOUNT OF POINTS:</p>
                    <p>POINTS</p>
                </section>
            </div>
        </article>
    )
}
